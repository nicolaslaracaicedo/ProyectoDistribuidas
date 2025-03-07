import { Component } from '@angular/core';
import { ServiciosService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso-datos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ingreso-datos.component.html',
  styleUrl: './ingreso-datos.component.css'
})
export class IngresoDatosComponent {
  itemName: string = '';
  category: string = '';
  quantity: number = 1;
  description: string = '';

  constructor(private serviciosService: ServiciosService) {}

  enviarDatos() {
    const datos = {
      itemName: this.itemName,
      category: this.category,
      quantity: this.quantity,
      description: this.description
    };

    this.serviciosService.postDatos(datos).subscribe(response => {
      console.log('Datos enviados:', response);
      this.limpiarCampos();
    });
  }

  limpiarCampos() {
    this.itemName = '';
    this.category = '';
    this.quantity = 1;
    this.description = '';
  }
}
