import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltrosService} from '../../Services/filtros.service';
import { Helado } from '../../Classes/Helado';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() resultadoBuscar : EventEmitter<Helado[]>
  public sabor : string;

  constructor(private filtrosService : FiltrosService) {
    this.resultadoBuscar = new EventEmitter<Helado[]>();
   }

  ngOnInit() {
  }

  public BuscarClicked(){
    this.filtrosService.FiltrarPorSabor(this.sabor)
    .then(
      data => { 
        this.resultadoBuscar.emit(data)
      }
    )
  }
}
