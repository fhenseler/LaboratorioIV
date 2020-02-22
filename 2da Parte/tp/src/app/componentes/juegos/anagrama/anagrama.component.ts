import { Component, OnInit } from '@angular/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from "rxjs";
import { JuegoAnagrama } from '../../../clases/juego-anagrama';
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nombreJugador : string;
  nuevoJuego : JuegoAnagrama;
  palabraDesordenada : string;
  palabraIngresada : string;
  resultado : string;
  Tiempo : number;
  repetidor : any;
  esconderBotones : boolean = true;
  tiempoUtilizado : number;
  private subscription : Subscription;
  mostrar : boolean = true;
  
  constructor(private route: ActivatedRoute, private router: Router, public auth : MiFirebaseService) 
  {
    this.nuevoJuego = new JuegoAnagrama();
    this.Tiempo = 0;
  }

  generarPalabra()
  {
    this.mostrar = false;
    this.esconderBotones = false;
    (<HTMLInputElement>document.getElementById("botonVerificar")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonRendirse")).disabled = false;
    this.resultado = "";
    (<HTMLInputElement>document.getElementById("palabraIngresada")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonVerificar")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonRendirse")).disabled = false;
    (<HTMLInputElement>document.getElementById("botonGenerar")).disabled = true;
    this.palabraDesordenada = this.nuevoJuego.generarPalabra();

    this.repetidor = setInterval(()=>{
      this.Tiempo++;
    },900);
  }

  jugar()
  {
    if(this.palabraIngresada == "" || this.palabraIngresada == null)
    {
      this.resultado = "Vacío";
    }
    else
    {
      this.nuevoJuego.comenzarJuego(this.palabraIngresada);
      this.resultado = this.nuevoJuego.verificarJuego();
      
      if (this.resultado == "Ganó")
      {
        this.mostrar = true;
        (<HTMLInputElement>document.getElementById("botonVerificar")).disabled = true;
        (<HTMLInputElement>document.getElementById("botonRendirse")).disabled = true;
        this.tiempoUtilizado = this.Tiempo;
        (<HTMLInputElement>document.getElementById("botonGenerar")).disabled = false;
        (<HTMLInputElement>document.getElementById("palabraIngresada")).value = null;
        clearInterval(this.repetidor);
        this.Tiempo = 0;
        this.esconderBotones = true;
        this.guardar();
      }
      else
      {
        (<HTMLInputElement>document.getElementById("palabraIngresada")).value = null;
      }
    }
  }

  rendirse()
  {
    this.mostrar = true;
    (<HTMLInputElement>document.getElementById("botonVerificar")).disabled = true;
    (<HTMLInputElement>document.getElementById("botonRendirse")).disabled = true;
    this.tiempoUtilizado = this.Tiempo;
    (<HTMLInputElement>document.getElementById("botonGenerar")).disabled = false;
    (<HTMLInputElement>document.getElementById("palabraIngresada")).value = null;
    clearInterval(this.repetidor);
    this.Tiempo = 0;
    this.esconderBotones = true;
    this.resultado = "Perdió";
    this.nuevoJuego.resultado = "Perdió";
    this.guardar();
  }

  guardar()
  {
    this.nuevoJuego.usuario = this.nombreJugador;
    console.log(this.nuevoJuego);
    this.auth.guardarPuntuaciónAnagrama(this.nuevoJuego);
  }

  volver()
  {
    this.router.navigate(['/menuUsuario']);
  }

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;      
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
    (<HTMLInputElement>document.getElementById("palabraIngresada")).disabled = true;
  }

}
