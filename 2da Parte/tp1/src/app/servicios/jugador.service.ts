import { Injectable } from '@angular/core';
import { MiFirebaseService } from './mi-firebase.service';
import { Usuario } from '../clases/usuario';


@Injectable()
export class JugadorService {
  usuario : Usuario;
 
  constructor(public auth : MiFirebaseService) {
    
   }

   
   
  
}
