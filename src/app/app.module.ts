import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { KeppersComponent } from './components/keppers/keppers.component';
import { ContactComponent } from './components/contact/contact.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { GuardarEmailComponent } from './modulosemail/components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './modulosemail/components/mostrar-email/mostrar-email.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    HomeComponent,
    KeppersComponent,
    ContactComponent,
    TiendaComponent,
    GuardarEmailComponent,
    MostrarEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
