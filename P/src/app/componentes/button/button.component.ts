import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HeladosService } from '../../Services/helados.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() id : number;
  @Output() borrado : EventEmitter<{}>;

  constructor(private heladosService : HeladosService) {
    this.borrado = new EventEmitter();
   }

  ngOnInit() {
  }

  public BorrarClicked():void{
    this.heladosService.Borrar(this.id)
    .then( () =>{      
      this.borrado.emit();
    });
  }

}
