import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase/app";
import "rxjs/add/operator/map";
import { Jugador } from "../clases/jugador";
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { Observable } from 'rxjs/Observable';
import { JuegoClickea } from '../clases/clickea-rapido';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';
import { JuegoAnagrama } from '../clases/juego-anagrama';
import { JuegoAgilidad } from '../clases/juego-agilidad';
import { JuegoTateti } from '../clases/juego-tateti';

@Injectable()
export class FirebaseService {
  respuestasAFL : AngularFireList<any>;
  respuestasObservable : Observable<any>;
  constructor(
    public afAuth : AngularFireAuth,
    public afDB : AngularFireDatabase
  ) { }

  logOut()
  {
    return this.afAuth.auth.signOut();
  }

  registrar(jugador : Jugador)
  {
    return new Promise( (resolve , reject) =>
    {
      this.afAuth.auth.createUserWithEmailAndPassword(jugador.email,jugador.pass)
      .then( userData => resolve(userData), err => reject(err));
    }    
  );
  }

  logear(jugador : Jugador)
  {
    return new Promise( (resolve , reject) =>
    {
      this.afAuth.auth.signInWithEmailAndPassword(jugador.email,jugador.pass)
      .then( userData => resolve(userData), err => reject(err));
    }    
  );
  }

  getAuth()
  {
    return this.afAuth.authState.map( auth => auth);
  }

  traerDatosAdivina()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAdivina");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuacionAdivina(juegoAdivina : JuegoAdivina)
  {
    const resultadosAdivina = this.afDB.list("/resultadosAdivina/");
    resultadosAdivina.push(juegoAdivina);
  }

  traerDatosAgilidad()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAgilidad");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAgilidad(juegoAgilidad : JuegoAgilidad)
  {
    const resultadosAgilidad = this.afDB.list("/resultadosAgilidad/");
    resultadosAgilidad.push(juegoAgilidad);
  }

  traerDatosAnagrama()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAnagrama");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAnagrama(juegoAnagrama : JuegoAnagrama)
  {
    const resultadosAnagrama = this.afDB.list("/resultadosAnagrama/");
    resultadosAnagrama.push(juegoAnagrama);
  }

  traerDatosPiedraPapelTijera()
  {
      this.respuestasAFL = this.afDB.list("/resultadosPiedraPapelTijera");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónPiedraPapelTijera(juegoPiedraPapelTijera : JuegoPiedraPapelTijera)
  {
    const resultadosPiedraPapelTijera = this.afDB.list("/resultadosPiedraPapelTijera/");
    resultadosPiedraPapelTijera.push(juegoPiedraPapelTijera);
  }

  traerDatosClickea()
  {
      this.respuestasAFL = this.afDB.list("/resultadosClickea");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarClickea(juego : JuegoClickea)
  {
    const resultadosBJ = this.afDB.list("/resultadosClickea/");
    resultadosBJ.push(juego);
  }
  traerDatosTateti()
  {
      this.respuestasAFL = this.afDB.list("/resultadosTateti");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónTateti(juegoTateti : JuegoTateti)
  {
    const resultadosTateti = this.afDB.list("/resultadosTateti/");
    resultadosTateti.push(juegoTateti);
  }
}