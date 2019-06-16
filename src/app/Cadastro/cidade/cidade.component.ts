import { Component, OnInit } from '@angular/core';
import { Cidade } from './models/cidade';
import { CidadeService } from './cidade.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidade: Cidade;
  cidades: Cidade[];
  edit: boolean;
  dataSource: any;

  displayedColumns: string[] = ['actionsColumn','codigo', 'cidade'];

  paginator: MatPaginator;
  sort: MatSort;

  constructor(private service:CidadeService) { }

  ngOnInit() {
    this.cidade = new Cidade();
    this.cidades = new Array<Cidade>();
    this.listAll();
  }

  listAll(){
    console.log(this.cidade);
    this.service.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
        console.log(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(classes: any){
    this.dataSource = new MatTableDataSource<Cidade>(classes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  save(){
    this.service.save(this.cidade).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.cidade = new Cidade();
  }

  update(){
    this.service.update(this.cidade).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.cidade = new Cidade();
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
    this.cidade = local;
    this.edit = true;
  }

}
