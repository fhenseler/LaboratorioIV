import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../componentes/table/table.component';
import { AppComponent } from '../app.component';

// declaro donde quiero que se dirija
const MiRuteo = [
  {
    path: '',
    children:
    [
        { path: '', redirectTo: 'Lista', pathMatch: 'full' },
        { path: 'Lista', data: { depth: 1 }, component: TableComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(MiRuteo, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
