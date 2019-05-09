import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display: boolean = false;
  jugador : Jugador;
  errorMsg : string = "";
  email : string;
  pass : string;
  
  constructor(private route : ActivatedRoute,private router : Router, private auth : FirebaseService) {
    
   }

  Login()
  {
    if(this.email == null || this.pass == null)
    {
        this.error("Complete todos los campos");
    }
    else
    {
      this.jugador = new Jugador(this.email,this.pass);
      this.auth.logear(this.jugador)
      .then((res) => {console.log(res),
      this.router.navigate(['/Menu']);
        })
      .catch((err) => {
        this.error(err.message)
      })
     
     
    }
    
  }
  ngOnInit() {
  }

  error(Msg : string)
  {
     this.errorMsg = Msg;
     this.showDialog();
  } 

 

   showDialog() {
       this.display = true;
   }

}