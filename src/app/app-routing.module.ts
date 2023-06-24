import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { KeppersComponent } from './components/keppers/keppers.component';
import { ContactComponent } from './components/contact/contact.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'animales', component:AnimalsComponent},
  {path:'contacto', component:ContactComponent},
  {path:'cuidadores', component:KeppersComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
