import { Injectable } from '@angular/core';
import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from '../Model/Vehiculo';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor(private vehiculosService : VehiculosService) { }

  public FiltrarPorModelo(modelo : string){
    return this.vehiculosService.Listar().pipe<Vehiculo[]>(
      map( vehiculos => {
        if(modelo === undefined || modelo === ''){
          return vehiculos;
        }
        else{
          return (vehiculos as Vehiculo[]).filter( objeto => objeto.modelo.toLowerCase() === modelo.toLowerCase());
        }
      })
    ).toPromise();
  }
}
