import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AssociadoService } from '../../../services';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-associado-list',
  templateUrl: './associado-list.component.html',
  styleUrls: ['./associado-list.component.scss']
})

export class AssociadoListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['assid', 'name', 'matricula', 'createdAt', 'updatedAt', 'info', 'update'];
  assocs: any;
  message = '';
  name: string;
  email: string;
  matricula: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private associadoService: AssociadoService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.getAssociado(this.route.snapshot.paramMap.get('id'));
    this.associadoService.getAssociados()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.assocs = data;
          console.log(this.assocs);
        }
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }  
}

