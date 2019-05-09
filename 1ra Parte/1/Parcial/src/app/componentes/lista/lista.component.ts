import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { VehiculosService } from '../../Services/vehiculos.service';
import { Vehiculo } from '../../Model/Vehiculo';
import { Helper } from '../../Helper/Helper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public objetos: Array<Vehiculo>;
  @ViewChild("content") modalContent: TemplateRef<any>;
  

  constructor(private VehiculosService: VehiculosService, private modal: NgbModal) {

  }

  ngOnInit() {
    this.RefreshData();
  }

  public RefreshData(): void {
    this.VehiculosService.Listar().subscribe(lista => {
      this.objetos = lista;
    })
  }

  public BorrarEspacios(cadena:string):string{
    return Helper.BorrarEspacios(cadena);
  }

  public FiltrarPorModelo(lista : Vehiculo[]){
    if(lista.length == 0)
    {
      this.RefreshData();
      this.modal.open(this.modalContent);
    }
    else{
      this.objetos = lista;
    }
  }
  


}
