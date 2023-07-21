import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrosComponent } from './components/registros/registros.component';

const rutas: Routes = [
  // { path: '', component: InicioComponent },
  { path: 'recientes', component: RecientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registros', component: RegistrosComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirige al login si la ruta no se encuentra
];

@NgModule({
  declarations: [
    AppComponent,
    RecientesComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegistrosComponent,
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
