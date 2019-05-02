import { Injectable } from '@angular/core';
import { HttpBase } from './http-base.service';
import { Vehiculo } from '../Model/Vehiculo';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  constructor(public miHttp: HttpBase<Vehiculo>) {
  }

  public Listar(): Observable<Vehiculo[]> {
    return this.miHttp.httpGetO('Vehiculos/listar');
  }

  public Agregar(object : JSON){
    return this.miHttp.httpPostP('Vehiculos/registrar',object);
  }

  public Borrar(id: number) : Promise<any> {
    return this.miHttp.httpDeleteP('Vehiculos/' + id);
  }
}
