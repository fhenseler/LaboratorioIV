import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/interval'; 
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {
  isLogged : boolean = true;
  Display : boolean = true;
  nombreUsuario : string;
  emailUsuario : string;
 

  constructor( private auth : MiFirebaseService, public routes : ActivatedRoute, public router : Router) { }

  ngOnInit() {
    
    this.auth.getAuth().subscribe( user =>{
      if(user)
      {
        this.isLogged=false;
        this.Display = false;
        this.nombreUsuario = user.displayName;
        this.emailUsuario = user.email;
       
      }
      else
      {
       
        this.Display  = true;
        this.isLogged = true;
        this.router.navigate(['/']);
      }

  })
  }

}
