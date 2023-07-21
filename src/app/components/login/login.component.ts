import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) { }
  
  email: string = '';
  password: string = '';
  fullname: string = '';

  email2: string = '';
  password2: string = '';
  fullname2: string = '';

  login() {
    // alert(`email: ${this.email}, password: ${this.password}`);
    // this.validar();
    const user: object = {
      email: this.email,
      password: this.password,
    };

    if (this.validar()) {
      sessionStorage.setItem('email', this.email);
      // sessionStorage.setItem('password', this.password);


      this.router.navigate(['/home']);
    }
  }

  signup() {
    // alert(`email: ${this.email}, password: ${this.password}`);
    // this.validar();
    const user: object = {
      email2: this.email2,
      password2: this.password2,
      fullname2: this.fullname2,
    };

    if (this.validar2()) {
      sessionStorage.setItem('email2', this.email2);
      // sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('fullname2', this.fullname2);

      this.router.navigate(['/home']);
    }
  }

  validar() {
    if (!this.password || !this.email) {
      alert('Todos los campos son obligatorios');
      return false;
    }

    // validar password
    if (this.password.length < 8) {
      alert('la constraseña debe contener al menos 6 caracteres');
      return false;
    }

    // validar email
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailregex.test(this.email)) {
      alert('Correo electrónico inválido.');
      return false;
    }
    return true;
  }

  validar2() {
    if (!this.fullname2 || !this.password2 || !this.email2) {
      alert('Todos los campos son obligatorios2');
      return false;
    }
    // valida nombre
    const fullname2Regex = /^[a-zA-Z\s]+$/;
    if (!fullname2Regex.test(this.fullname2)) {
      alert('El nombre solo puede contener letras y numeros');
      return false;
    }

    // validar password
    if (this.password2.length < 8) {
      alert('la constraseña debe contener al menos 6 caracteres');
      return false;
    }

    // validar email
    const email2regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email2regex.test(this.email2)) {
      alert('Correo electrónico inválido.');
      return false;
    }
    return true;
  }
}
