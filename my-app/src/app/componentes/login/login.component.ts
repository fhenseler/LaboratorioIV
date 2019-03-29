import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login', // Nuevo tag HTML <app_login></app_login>
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public guardado: boolean;

  constructor(private router: Router) { // Vamos a poder usar this.Router como un objeto
    this.usuario = new Usuario();
    this.guardado = false;
  }

  ngOnInit() {
  }

  guardar() {
    this.guardado = true;
// tslint:disable-next-line: no-console
    console.info('El objeto: ', this.usuario);
  }

  navegar() {
    // this.guardado = true;
    // tslint:disable-next-line: no-console
    this.router.navigate(['/Error', {id: 15}]);
  }

}
