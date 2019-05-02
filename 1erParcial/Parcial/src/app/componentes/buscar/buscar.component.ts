import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltrosService} from '../../Services/filtros.service';
import { Vehiculo } from '../../Model/Vehiculo';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Output() resultadoBuscar : EventEmitter<Vehiculo[]>
  public modelo : string;

  constructor(private filtrosService : FiltrosService) {
    this.resultadoBuscar = new EventEmitter<Vehiculo[]>();
   }

  ngOnInit() {
  }

  public BuscarClicked(){
    this.filtrosService.FiltrarPorModelo(this.modelo)
    .then(
      data => { 
        this.resultadoBuscar.emit(data)
      }
    )
  }
}
