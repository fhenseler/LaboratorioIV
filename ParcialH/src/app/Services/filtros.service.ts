import { Injectable } from '@angular/core';
import { HeladosService } from './helados.service';
import { Helado } from '../Classes/Helado';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor(private heladosService : HeladosService) { }

  public FiltrarPorSabor(sabor : string){
    return this.heladosService.Listar().pipe<Helado[]>(
      map( helados => {
        if(sabor === undefined || sabor === ''){
          return helados;
        }
        else{
          return (helados as Helado[]).filter( objeto => objeto.sabor.toLowerCase() === sabor.toLowerCase());
        }
      })
    ).toPromise();
  }
}
