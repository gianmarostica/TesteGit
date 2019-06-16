import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './cliente.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Cidade } from '../cidade/models/cidade';
import { CidadeService } from '../cidade/cidade.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Cliente[];
  cidades: Cidade[];
  edit: boolean;

  dataSource: any;
  displayedColumns: string[] = ['actionsColumn','codigo', 'cliente','endereco','cidade'];
  

  paginator: MatPaginator;
  sort: MatSort;

  constructor(private service:ClienteService, private services:CidadeService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.clientes = new Array<Cliente>();
    this.cidades = new Array<Cidade>();
    this.services.findAll().subscribe(subscibe =>{
      this.cidades = subscibe;
      console.log(subscibe);
    })
    this.listAll();
  }

  listAll(){
    console.log(this.cliente);
    this.service.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
        console.log(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(classes: any){
    this.dataSource = new MatTableDataSource<Cliente>(classes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  save(){
    this.service.save(this.cliente).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.cliente = new Cliente();
  }

  update(){
    this.service.update(this.cliente).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.cliente = new Cliente();
      }        
    }, error => {
      console.log(error);
    });
  }

  excluir(localId: number){
    this.service.remove(localId).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  markEdit(local: any){
    this.cliente = local;
    this.edit = true;
  }

}
