import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { VehiculosService } from '../../Services/vehiculos.service';
import { Vehiculo } from '../../Model/Vehiculo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() agregadoNuevo : EventEmitter<{}>
  @Output() resultadoBuscar : EventEmitter<Vehiculo[]>
  public form: FormGroup;  
  public error : boolean;
  public errorMessage : string;


  constructor(private modalService: NgbModal, private formBuilder : FormBuilder, private VehiculosService : VehiculosService) { 
    this.error = false;
    this.agregadoNuevo = new EventEmitter<{}>();
    this.resultadoBuscar = new EventEmitter<Vehiculo[]>();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      modelo:[
        '',
        Validators.required
      ],
      cantPuertas: [
        "3"
      ],
      marca: [
        '',
        Validators.required
      ]
    });
  }

  public AgregarClicked(content):void{
    this.form.reset();
    this.form.controls["cantPuertas"].setValue("3");
    this.modalService.open(content);
  }

  public Submit():void{
    this.error = false;
    this.VehiculosService.Agregar(this.form.value)
    .then( () =>{
      this.modalService.dismissAll();
      this.agregadoNuevo.emit();
    }, err => {
      console.log(err);
      this.error = true;
      this.errorMessage = err.message;
    })
  } 

  public BuscarClicked(value : Vehiculo[]){
    this.resultadoBuscar.emit(value);
  }

}
