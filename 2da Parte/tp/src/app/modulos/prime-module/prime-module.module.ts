import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {TabMenuModule} from 'primeng/tabmenu';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule,
    DialogModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ButtonModule,
    TableModule
    
  ],
  exports:[
    MenubarModule,
    CardModule,
    CarouselModule,
    TabMenuModule ,
    DialogModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ButtonModule,
    TableModule
  ],
  declarations: []
})
export class PrimeModuleModule { }
