import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {


  juegos: any[];
  isLogged : boolean = false;
  nombreUsuario : string;
  emailUsuario : string;
  msgs: any[];
  
  constructor(private auth : MiFirebaseService, public routes : ActivatedRoute, public router : Router) {
      this.msgs = [];
      this.juegos = [
          {name: 'Adivina el numero', desc: "",img : "assets/images/adivina.png"},
          {name: 'Agilidad Aritmetica', desc: "",img : "assets/images/cerebro.jpg" },
          {name: 'Anagrama', desc: "",img : "assets/images/anagramas.jpg"},
          {name: 'Piedra papel tijera', desc: "",img : "../../../assets/images/ppt.jpg"},
          {name: 'TaTeTi', desc: "",img : "assets/images/adivina.png"},
          {name: 'Clickea', desc: "",img : "assets/images/clickea.jpg"},
          
          
      ];
      console.log(this.juegos);
  }

  salir()
  {
    this.auth.logOut();
  }
  est()
    {
        this.router.navigate(["/Menu/Estadisticas"]);
    }

  ngOnInit()
  {
    this.auth.getAuth().subscribe( user =>{
          if(user)
          {
            let mail = user.email;
            let splitted = mail.split("@",1);
            this.nombreUsuario = splitted[0];
            this.isLogged=true;           
            this.emailUsuario = user.email;
          }
          else
          {
            this.isLogged = false;
            this.router.navigate(['/']);
          }

      })
  }

}
