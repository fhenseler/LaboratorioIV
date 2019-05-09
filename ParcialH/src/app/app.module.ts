import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TableComponent } from './componentes/table/table.component';
import { HeladosService } from './Services/helados.service';
import { HttpBase } from './Services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LogicComponent } from './componentes/logic/logic.component';
import { SearchComponent } from './componentes/search/search.component';
import { ButtonComponent } from './componentes/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RuteandoModule } from './Router/router';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LogicComponent,
    ButtonComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RuteandoModule,
  ],
  providers: [
    HttpBase,
    HeladosService,
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { 
}
