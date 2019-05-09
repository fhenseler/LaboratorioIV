import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeladosService } from '../../Services/helados.service';
import { Helado } from '../../Classes/Helado';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {
  @Output() agregadoNuevo : EventEmitter<{}>
  @Output() resultadoBuscar : EventEmitter<Helado[]>
  public form: FormGroup;  
  public error : boolean;
  public errorMessage : string;


  constructor(private modalService: NgbModal, private formBuilder : FormBuilder, private HeladosService : HeladosService) { 
    this.error = false;
    this.agregadoNuevo = new EventEmitter<{}>();
    this.resultadoBuscar = new EventEmitter<Helado[]>();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sabor:[
        '',
      ],
      tipo: [
        "Agua"
      ],
      kilos: [
        '',
      ]
    });
  }

  public AgregarClicked(content):void{
    this.form.reset();
    this.form.controls["tipo"].setValue("Agua");
    this.modalService.open(content);
  }

  public Submit():void{
    this.error = false;
    this.HeladosService.Agregar(this.form.value)
    .then( () =>{
      this.modalService.dismissAll();
      this.agregadoNuevo.emit();
    }, err => {
      console.log(err);
      this.error = true;
      this.errorMessage = err.message;
    })
  } 

  public BuscarClicked(value : Helado[]){
    this.resultadoBuscar.emit(value);
  }

}
