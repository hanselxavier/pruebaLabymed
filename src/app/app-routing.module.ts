import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'buscar',
    component: BusquedaComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports: [
    
  ]
})
export class AppRoutingModule { }
