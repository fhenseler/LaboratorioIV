import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { VehiculosService } from './Services/vehiculos.service';
import { HttpBase } from './Services/http-base.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './Services/loader-interceptor.service';
import { OtroComponenteComponent } from './componentes/otro-componente/otro-componente.component';
import { RuteandoModule } from './Router/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorDirective } from './directivas/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NavbarComponent,
    BotonComponent,
    SpinnerComponent,
    BuscarComponent,
    OtroComponenteComponent,
    PrincipalComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RuteandoModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpBase,
    VehiculosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { 
}
