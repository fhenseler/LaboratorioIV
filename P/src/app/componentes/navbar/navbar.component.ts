import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeladosService } from '../../Services/helados.service';
import { Helado } from '../../Model/Helado';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
        Validators.required
      ],
      tipo: [
        "Agua"
      ],
      kilos: [
        '',
        Validators.required
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
