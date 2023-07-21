import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  fullname: any = sessionStorage.getItem('fullname');
  @Input() textNavbar?: string = '';

  // TODO funcion para cerrar sesion
  // sessionStorage.removeItem(Apellido) nombre completo, email
  logout() {
    sessionStorage.clear();
  }
}
