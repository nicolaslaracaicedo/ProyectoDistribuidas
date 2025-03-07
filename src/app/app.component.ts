import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import {LoginComponent} from './login/login.component'
import { AuthService } from './service.auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,MostrarDatosComponent,IngresoDatosComponent,FormsModule,CommonModule], 
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  isLoggedIn = false;
  showIngreso = false;

  constructor(private authService: AuthService) {}

  // Método para manejar el login
  onLoginSuccess() {
    this.isLoggedIn = true;
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout().then(() => {
      this.isLoggedIn = false;
      this.showIngreso = false;  // Ocultar el componente de ingreso de datos
    });
  }

  // Método para alternar la visibilidad del componente de ingreso de datos
  toggleIngreso() {
    this.showIngreso = !this.showIngreso;
  }
}
