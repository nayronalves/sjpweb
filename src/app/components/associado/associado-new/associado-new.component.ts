import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AssociadoService, AddressService } from 'src/app/services';

@Component({
  selector: 'app-associado-new',
  templateUrl: './associado-new.component.html',
  styleUrls: ['./associado-new.component.scss']
})
export class AssociadoNewComponent implements OnInit {
  step = 0;
  submitted = false;
  dt: any;
  states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];
  


  form: FormGroup = this.fb.group({
    id: '',
    name: '',
    matricula: '',
    email: new FormControl( '', [Validators.required, Validators.email]),
    rg: '',
    cpf: '',
    dt_born: '',
    mat: '',
    Addresses: this.fb.group({
      description: '',
      zipcode: '',
      neighborhood: '',
      state: '',
      city: '',
      number: '',
      complement: '',
      AssociadoId: ''
    })
  })
  associado = {
    name: '',
    matricula: '',
    email: ''
  };

  constructor(
    private fb: FormBuilder,
    private associadoService: AssociadoService,
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
  }

  newAssoc(): void {
    this.associadoService.createAssociado(this.form.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          let d = this.form.value;
          this.form.setValue({
            id: d.id,
            name: d.name,
            matricula: d.matricula,
            email: d.email,
            rg: d.rg,
            cpf: d.cpf,
            dt_born: d.dt_born,
            mat: d.mat,
            Addresses: ({
              description: d.Addresses.description,
              zipcode: d.Addresses.zipcode,
              neighborhood: d.Addresses.neighborhood,
              state: d.Addresses.state,
              city: d.Addresses.city,
              number: d.Addresses.number,
              complement: d.Addresses.complement,
              AssociadoId: response.id
            })
          })
          console.log(this.form.value)
          let data = this.form.value
          this.addressService.createAddress(data.Addresses)
            .subscribe(
              res => {
                console.log(res);
              },
              error => {
                console.log(error);
              }
            )
        },
        error => {
          console.log(error);
        });
  }

  get email() { return this.form.get('email'); }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email não pode ser vazio';
    }

    return this.email.hasError('email') ? 'Esse email não é válido' : '';
  }

  newAssociado(): void {
    this.submitted = false;
    this.associado = {
      name: '',
      matricula: '',
      email: ''
    };
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  // submit(event) {
  //   console.log(document.getElementById('d'));
  //   console.log(this.form.get('data').value);
  // }

}
