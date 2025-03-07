import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service.auth'; // Sin .js

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<void>();  // Emisor del evento

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(session => {
        console.log('Sesión iniciada:', session);
        this.loginSuccess.emit();  // Emitir el evento de login exitoso
      })
      .catch(err => {
        console.error('Error de login:', err);
      });
  }
}
