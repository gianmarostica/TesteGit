import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './models/cliente';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor(private http:HttpClient) { }

save(local: Cliente): Observable<any>{
  return this.http.post(environment.urlApi+"clientes/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Cliente): Observable<any>{
  return this.http.put(environment.urlApi+"clientes/"+local.idCliente, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"clientes/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"clientes/"+id)
  .catch((error: any) => Observable.throw(error));
  }
}
