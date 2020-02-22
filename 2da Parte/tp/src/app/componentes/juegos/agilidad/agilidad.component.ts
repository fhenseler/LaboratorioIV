import { Component, OnInit } from '@angular/core';
import { JuegoAgilidad } from '../../../clases/juego-agilidad';
import { Subscription } from 'rxjs/Subscription';
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {
  nombreJugador : string;
  nuevoJuego : JuegoAgilidad;  
  ocultarVerificar : boolean;
  ingresado : any;
  Tiempo : number;
  repetidor : any;
  Mensaje : any;
  display : boolean = false;
  private subscription : Subscription;

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
    (<HTMLInputElement>document.getElementById("resultadoDeCuenta")).disabled = true;
  }

  constructor(public auth : MiFirebaseService) 
  {
    this.ocultarVerificar=true;
    this.Tiempo=30; 
    this.nuevoJuego = new JuegoAgilidad();
    this.nuevoJuego.numeroUno = null;
    this.nuevoJuego.numeroDos = null;
    this.nuevoJuego.operador = null;
    this.nuevoJuego.cuenta = null;
  }

  

  NuevoJuego()
  {
    this.ocultarVerificar = false;   
    this.nuevoJuego = new JuegoAgilidad();
    this.ingresado = null;
    (<HTMLInputElement>document.getElementById("resultadoDeCuenta")).disabled = false;
    
    this.nuevoJuego.comenzarJuego();
      this.repetidor = setInterval(()=>{ 
        
        this.Tiempo--;
        console.log("llego", this.Tiempo);
        if(this.Tiempo == 0) 
        {       
          clearInterval(this.repetidor);
          this.terminarJuego();
          this.ocultarVerificar = true;
          this.Tiempo = 30;
        }
      }, 900);
  }
  
  verificar()
  {
    if (this.nuevoJuego.cantCuentas < 4)
    {

      this.nuevoJuego.verificarJuego();
      console.log(this.nuevoJuego.cantCuentas);
      console.log(this.nuevoJuego.cantAciertos);
      console.log(this.nuevoJuego.numeroIngresado);
      this.nuevoJuego.numeroIngresado = null;
      this.nuevoJuego.comenzarJuego();
    }
    else
    {
      this.nuevoJuego.verificarJuego();
      this.nuevoJuego.numeroIngresado = null;
      this.nuevoJuego.numeroUno = null;
      this.nuevoJuego.numeroDos = null;
      this.nuevoJuego.operador = null;
      (<HTMLInputElement>document.getElementById("resultadoDeCuenta")).disabled = true;
      clearInterval(this.repetidor);
      this.terminarJuego();
      this.ocultarVerificar = true;
      this.Tiempo = 30;
    }
  }

  terminarJuego()
  {
    this.nuevoJuego.usuario = this.nombreJugador;
    this.auth.guardarPuntuaciónAgilidad(this.nuevoJuego);
      this.display = true;
  }

}
