import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  displayLogin: boolean = false;
  displayRegistro: boolean = false;
  logueado : boolean = true;
  usuariologueado : boolean = false;
  nombreUsuario : string;
  constructor(public auth : MiFirebaseService,public routes : ActivatedRoute,public router : Router) { }
 

    showLogin() {
      if(this.logueado == false)
      {
          this.router.navigate(['/Menu']);
      }
      else
      {
        this.displayLogin = true;
      }
        
    }
    showRegistro() {
      this.displayRegistro = true;
  }
  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      if(user)
      { 
          let mail = user.email;
          let splitted = mail.split("@",1);
          this.nombreUsuario = splitted[0];
   
        this.logueado = false;    
      }
      else
      {
        this.usuariologueado = false;
      }
    });
  }
  

}
