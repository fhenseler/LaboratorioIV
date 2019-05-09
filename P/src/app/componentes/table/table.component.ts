import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HeladosService } from '../../Services/helados.service';
import { Helado } from '../../Model/Helado';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public objetos: Array<Helado>;
  @ViewChild("content") modalContent: TemplateRef<any>;
  

  constructor(private heladosService: HeladosService, private modal: NgbModal) {

  }

  ngOnInit() {
    this.RefreshData();
  }

  public RefreshData(): void {
    this.heladosService.Listar().subscribe(lista => {
      this.objetos = lista;
    })
  }

  public FiltrarPorSabor(lista : Helado[]){
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
