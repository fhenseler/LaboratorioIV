import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoClickea } from '../../clases/clickea-rapido'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-clickea-rapido',
  templateUrl: './clickea-rapido.component.html',
  styleUrls: ['./clickea-rapido.component.css']
})
export class ClickeaRapidoComponent implements OnInit {
  @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  contador : number;
  nuevoJuego : JuegoClickea;
  ocultarVerificar: boolean;
  private subscription: Subscription;

  constructor() { 
    // this.ocultarVerificar=true;
    this.nuevoJuego = new JuegoClickea();
    console.info("Inicio clickea");
  }

  ngOnInit() {
  }
  startGame() {
    this.nuevoJuego.startTimer();
    this.nuevoJuego.startCount();
  }
  // NuevoJuego() 
  // {
    // // this.ocultarVerificar=false;
    // var button = document.getElementById("clickme"),
    // count = 0;
    // button.onclick = function() {
    // count += 1;
    // button.innerHTML = "Click me: " + count;
    // }
  // };

  // verificar()
  // {
  //   this.ocultarVerificar=false;
  // }  

};