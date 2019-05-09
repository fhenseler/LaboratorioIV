import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { VehiculosService } from '../../Services/vehiculos.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() id : number;
  @Output() borrado : EventEmitter<{}>;

  constructor(private vehiculosService : VehiculosService) {
    this.borrado = new EventEmitter();
   }

  ngOnInit() {
  }

  public BorrarClicked():void{
    this.vehiculosService.Borrar(this.id)
    .then( () =>{      
      this.borrado.emit();
    });
  }

}
