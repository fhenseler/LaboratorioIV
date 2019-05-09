import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-componente-con-input',
  templateUrl: './componente-con-input.component.html',
  styleUrls: ['./componente-con-input.component.css']
})


export class ComponenteConInputComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('') dato: Usuario;

  constructor() { }

  ngOnInit() {
  }

  guardar() {
// tslint:disable-next-line: no-console
    console.info('El objeto: ', this.dato);
  }

}
