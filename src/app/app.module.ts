import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { DrawerComponent } from './components/drawer/drawer.component';

const rutas: Routes = [
  // { path: '', component: InicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirige al login si la ruta no se encuentra
  { path: 'recientes', component: RecientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RecientesComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AlertComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
