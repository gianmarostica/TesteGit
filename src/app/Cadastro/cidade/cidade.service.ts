import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from './models/cidade';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {

constructor(private http:HttpClient) { }

save(local: Cidade): Observable<any>{
  return this.http.post(environment.urlApi+"cidades/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Cidade): Observable<any>{
  return this.http.put(environment.urlApi+"cidades/"+local.idCidade, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"cidades/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"cidades/"+id)
  .catch((error: any) => Observable.throw(error));
  }
}
