import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { LoginComponent } from '../../componentes/login/login.component';
import { RegistroComponent } from '../../componentes/registro/registro.component';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { DatosComponent } from '../../componentes/datos/datos.component';
import { PrincipalComponent } from "../../componentes/principal/principal.component";
import { ErrorComponent } from "../../componentes/error/error.component";
import { MenuJuegosComponent } from '../../componentes/menu-juegos/menu-juegos.component';
import { CargandoComponent } from '../../componentes/cargando/cargando.component';
import { AdivinaComponent } from '../../componentes/juegos/adivina/adivina.component';
import { AgilidadComponent } from '../../componentes/juegos/agilidad/agilidad.component';
import { PptComponent } from '../../componentes/juegos/ppt/ppt.component';
import { AnagramaComponent } from '../../componentes/juegos/anagrama/anagrama.component';
import { TatetiComponent } from '../../componentes/juegos/tateti/tateti.component';
import { ClickeaComponent } from '../../componentes/juegos/clickea/clickea.component';

const MiRuteo = [
  {path: '' , component: PrincipalComponent},
  {path: 'Login' , component: LoginComponent},  
  {path: 'Registro' , component: RegistroComponent},
  {path: 'Principal' , component: PrincipalComponent}, 
  {path: 'Menu' , component: CargandoComponent ,
     children:
    [ {path: '' , component: MenuJuegosComponent},
      {path:'Adivina',component:AdivinaComponent},
      {path:'Agilidad',component:AgilidadComponent},
      {path:'Piedra',component:PptComponent},
      {path:'Anagrama',component:AnagramaComponent},
      {path:'Tateti',component:TatetiComponent},
      {path:'Clickea',component:ClickeaComponent},
      {path:'Estadisticas',component:DatosComponent}
    ]
  }, 
  {path: '**' , component: ErrorComponent},
  {path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MiRuteo),
  ],
  exports:[    
    RouterModule
  ],
  declarations: []
})
export class RuteoModuleModule { }
