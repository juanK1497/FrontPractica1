import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { AgregarEditarUsuariosComponent } from './components/agregar-editar-usuarios/agregar-editar-usuarios.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: 'ListadoUsuarios',pathMatch: 'full'},
  {path: 'ListadoUsuarios', component: ListadoUsuariosComponent},
  {path: 'AgregarUsuario', component: AgregarEditarUsuariosComponent},
  {path: 'VerUsuario/:cedula', component: VerUsuarioComponent},
  {path: 'EditarUsuario/:cedula', component: AgregarEditarUsuariosComponent},
  {path:'**', redirectTo: 'ListadoUsuarios',pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
