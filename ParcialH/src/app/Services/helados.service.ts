import { Injectable } from '@angular/core';
import { HttpBase } from './http.service';
import { Helado } from '../Classes/Helado';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {
  constructor(public miHttp: HttpBase<Helado>) {
  }

  public Listar(): Observable<Helado[]> {
    return this.miHttp.httpGetO('Helados/listar');
  }

  public Agregar(object : JSON){
    return this.miHttp.httpPostP('Helados/registrar',object);
  }

  public Borrar(id: number) : Promise<any> {
    return this.miHttp.httpDeleteP('Helados/' + id);
  }
}
