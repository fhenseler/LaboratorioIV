import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../../clases/juego-piedra-papel-tijera';
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  nombreJugador: string;
  habemus : boolean = true;
  resultado : any;
  visuales : boolean = true;
  mostrar : boolean = false;
  maquina : any;
  user : any;  
  juego : JuegoPiedraPapelTijera;
  ganadas : number = 0;
  perdidas : number = 0;
  empatadas : number = 0;
  puntos : number = 0;
  jugadas : number = 0;
  constructor(public auth : MiFirebaseService) { }

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
  }
  eleccion(elec : number)
  { 
    this.juego = new JuegoPiedraPapelTijera();
    this.juego.numeroIngresado = elec;
    this.resultado = this.juego.verificarJuego();
    console.log(this.juego);
    switch (elec) {
      case 1:
        this.user ="assets/images/piedra.jpg";
        break;
        case 2:
        this.user ="assets/images/papel.jpg";
        break;
        case 3:
        this.user ="assets/images/tijera.jpg";
        break;
    
      default:
        break;
    }
    switch (this.juego.numeroSecreto) {
      case 1:
        this.maquina ="assets/images/piedra.jpg";
        break;
        case 2:
        this.maquina ="assets/images/papel.jpg";
        break;
        case 3:
        this.maquina ="assets/images/tijera.jpg";
        break;
    
      default:
        break;
    }
    switch (this.resultado) {
      case "Ganó":
        this.ganadas++;
        this.puntos = (this.puntos+2);
        break;
        case "Perdió":
        this.perdidas++;        
        break;
        case "Emaptó":
        this.empatadas++;
        this.puntos = (this.puntos+1);
        break;
    
      default:
        break;
    }
    this.jugadas++;
    console.log(this.ganadas,this.empatadas,this.perdidas);
    this.guardar();
    this.habemus = false;
    this.visuales = true;
    
  }
  public jugar()
  {
    this.juego = null;
    this.habemus = true;
    this.visuales = false;
   
  }
  guardar()
  {
    this.juego.usuario = this.nombreJugador;
    this.juego.juego = "ppt";
    console.log(this.juego);
    this.auth.guardarPuntuaciónPiedraPapelTijera(this.juego);

  }


}
