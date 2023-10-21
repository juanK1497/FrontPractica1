import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


//modulos 
import { SharedModule } from './shared/shared.module';


//componentes 
import { AppComponent } from './app.component';
import { AgregarEditarUsuariosComponent } from './components/agregar-editar-usuarios/agregar-editar-usuarios.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarUsuariosComponent,
    ListadoUsuariosComponent,
    VerUsuarioComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
