import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AddressService, AssociadoService } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssociadoAlertComponent } from '../associado-alert/associado-alert.component';


@Component({
  selector: 'app-associado-details',
  templateUrl: './associado-details.component.html',
  styleUrls: ['./associado-details.component.scss']
})
export class AssociadoDetailsComponent implements OnInit {

  assoc = null;
  addr = '';
  idCurrent = null;
  submitted = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private associadoService: AssociadoService,
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.assoc = params['name'];
        this.idCurrent = params['id'];
        this.assoc = this.associadoService.getAssociado(this.idCurrent);
        this.assoc.subscribe(res => {
          res.Addresses.map(res => this.addr = res);
          this.upForm(res, this.addr);
          this.assoc = res;
          console.log(res);
        });
      }
    )

    this.form = this.fb.group({
      id: '',
      name: '',
      matricula: '',
      email: '',
      rg: '',
      cpf: '',
      dt_born: '',
      mat: '',
      Addresses: this.fb.group({
        id: '',
        description: '',
        zipcode: '',
        neighborhood: '',
        state: '',
        city: '',
        number: '',
        complement: '',
        AssociadoId: ''
      })
    });
  };

  upForm(assoc, addr) {
    this.form.patchValue({
      id: assoc.id,
      name: assoc.name,
      matricula: assoc.matricula,
      email: assoc.email,
      rg: assoc.rg,
      cpf: assoc.cpf,
      dt_born: assoc.dt_born,
      mat: assoc.mat,
      Addresses: ({
        id: addr.id,
        description: addr.description,
        zipcode: addr.zipcode,
        neighborhood: addr.neighborhood,
        state: addr.state,
        city: addr.city,
        number: addr.number,
        complement: addr.complement,
        AssociadoId: assoc.id
      })
    })
  }

  updateAssoc() {
    this.submitted = true;
    let d = this.form.value;
    this.associadoService.update(this.form.value).subscribe(
      res => {
        let data = this.form.value;
        console.log(data.Addresses.id);
        if (data.Addresses.id == undefined) {
          this.addressService.createAddress(data.Addresses)
            .subscribe(
              res => console.log("endereço criado: " + res, data)
            )
        }
        else {
          this.addressService.addrUpdate(data.Addresses)
            .subscribe(res => {
              console.log("atualizado:" + res)
            })
        }
        // console.log('associado atualizado com sucesso');
      },
      error => {
        console.log(error);
      }
    );
  }


  onRefresh() {
    this.associadoService.getAssociados();
  }

  destroyAssoc(idCurrent) {
    return this.associadoService.destroy(this.idCurrent);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AssociadoAlertComponent, {
      data: {
        message: 'Deseja excluir o associado ' + this.assoc.name + '?',
        buttonText: {
          ok: 'Sim',
          cancel: 'Não'
        }
      }
    });

    console.log(this.idCurrent);
    const snack = this.snackBar;

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.destroyAssoc(this.idCurrent)
          .subscribe(
            success => {
              this.snackBar.open('Associado ' + this.assoc.name + ' excluído com sucesso!', 'Fechar', {
                duration: 2000,
              })
              this.router.navigate(['homesys/associados']);
            }
          );
        console.log(confirmed, this.idCurrent);
      }
    });
  }

}
