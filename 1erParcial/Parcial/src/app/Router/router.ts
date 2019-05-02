import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from '../componentes/lista/lista.component';
import { OtroComponenteComponent } from '../componentes/otro-componente/otro-componente.component';
import { PrincipalComponent } from '../componentes/principal/principal.component'
import { AppComponent } from '../app.component';
// declaro donde quiero que se dirija
const MiRuteo = [
  {
    path: '', 
    component: PrincipalComponent,
    children:
    [
        { path: '', redirectTo: 'Lista', pathMatch: 'full' },
        { path: 'Lista', data: { depth: 1 }, component: ListaComponent },
        { path: 'Otro', data: { depth: 2 }, component: OtroComponenteComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(MiRuteo, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }