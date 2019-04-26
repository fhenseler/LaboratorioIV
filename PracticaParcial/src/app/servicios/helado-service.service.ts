import { Injectable } from '@angular/core';
import { Helado } from '../clases/Helado';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class HeladoServiceService {

  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    this.peticion = this.miHttp.httpGetO("http://localhost:3003");
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<Helado> {
   this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
    .then( data => {
      console.log( data );
    })
    .catch( err => {
      console.log( err );
    });


    this.peticion
    .subscribe( data => {
      console.log("En listar");
      console.log( data );
    }, err => {
      console.info("error: " ,err );
    })

    let miArray: Array<Helado> = new Array<Helado>();

    miArray.push(new Helado("Frutilla", "Agua", 1));
    miArray.push(new Helado("Chocolate", "Crema", 2));
    miArray.push(new Helado("Limón", "Agua", 3));
    miArray.push(new Helado("Americana", "Crema", 1));
    miArray.push(new Helado("Granizado", "Crema", 4));
    miArray.push(new Helado("Marroc", "Crema", 1));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Helado>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    let promesa: Promise<Array<Helado>> = new Promise((resolve, reject) => {
      let miArray: Array<Helado> = new Array<Helado>();
      miArray.push(new Helado("Chocolate", "Crema", 2));
      miArray.push(new Helado("Limón", "Agua", 3));
      miArray.push(new Helado("Americana", "Crema", 1));
      miArray.push(new Helado("Granizado", "Crema", 4));
      miArray.push(new Helado("Marroc", "Crema", 1));
      resolve(miArray);
    });

    return promesa;
  }

}
