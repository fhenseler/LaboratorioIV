import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';
import { JuegoClickea } from '../../../clases/juego-clickea'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-clickea',
  templateUrl: './clickea.component.html',
  styleUrls: ['./clickea.component.css']
})
export class ClickeaComponent implements OnInit {
  resultado : number;
  nombreJugador: string;
  nuevoJuego : JuegoClickea;
  ocultarVerificar: boolean;
  juegoTerminado: boolean;
  // resultado : any;
  display : boolean;
  private subscription: Subscription;


  constructor(public auth : MiFirebaseService) {
    this.ocultarVerificar = true;
    this.nuevoJuego = new JuegoClickea();
    console.info("Inicio clickea");
  }

  ngOnInit() {

    (<HTMLInputElement>document.getElementById("clickme")).textContent = "Empezá a clickear!";
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
  }
  startGame() {
    //  this.nuevoJuego.resultado = null;
    // this.nuevoJuego = new JuegoClickea();
    if(this.nuevoJuego.resultado > 0)
    {
      (<HTMLInputElement>document.getElementById("clickme")).textContent = "Cantidad de clicks: " + this.nuevoJuego.resultado;
    }
    this.nuevoJuego.startTimer();
    this.nuevoJuego.startCount();
    this.terminarJuego();
    if(this.juegoTerminado == true && this.nuevoJuego.resultado > 0 && this.nuevoJuego.timeLeft == 0)
    {
      this.display = true;
    }

  }

  terminarJuego()
  {
    if(this.nuevoJuego.timeLeft == 0)
    {
      (<HTMLInputElement>document.getElementById("clickme")).textContent = "Juego terminado";
      (<HTMLInputElement>document.getElementById("clickme")).disabled = true;
      this.nuevoJuego.resultado -= 1;
      this.nuevoJuego.usuario = this.nombreJugador;
      this.auth.guardarPuntuaciónClickea(this.nuevoJuego);
      this.juegoTerminado = true;
    }
  }

  reiniciarJuego()
  {
    // this.nuevoJuego.resultado = 0;
    // this.juegoTerminado = true;
    this.nuevoJuego = new JuegoClickea();
    this.nuevoJuego.timeLeft = 30;
    this.nuevoJuego.resultado = 0;
    (<HTMLInputElement>document.getElementById("clickme")).textContent = "Empezá a clickear!";
    (<HTMLInputElement>document.getElementById("clickme")).disabled = false;
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
  }

};
