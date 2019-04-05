import {Component, OnInit, Input  } from '@angular/core';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: '[app-fila-profesor]',
  templateUrl: './fila-profesor.component.html',
  styleUrls: ['./fila-profesor.component.css']
})
export class FilaProfesorComponent implements OnInit {

 @Input() unProfesor:Profesor;
  constructor() { }

  ngOnInit() {
  }

}
