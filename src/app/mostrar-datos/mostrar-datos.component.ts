import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-datos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {
  datos: { itemName: string, category: string, quantity: number, description: string, id: string }[] = [];
  productoAEditar: { itemName: string, category: string, quantity: number, description: string, id: string } | null = null;

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.serviciosService.getDatos().subscribe(data => {
      this.datos = data;
    });
  }

  eliminarProducto(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.serviciosService.eliminarProducto(id).subscribe(
        () => {
          alert('Producto eliminado exitosamente');
          this.cargarDatos(); // Recargar los datos después de la eliminación
        },
        error => {
          alert('Hubo un error al eliminar el producto');
        }
      );
    }
  }

  // Activar la edición de un producto
  activarEdicion(producto: any) {
    this.productoAEditar = { ...producto };  // Copiar los datos del producto a editar
  }

  // Cancelar la edición
  cancelarEdicion() {
    this.productoAEditar = null;  // Limpiar la variable de edición
  }

  // Actualizar el producto
  actualizarProducto() {
    if (this.productoAEditar) {
      this.serviciosService.updateProducto(this.productoAEditar.id, this.productoAEditar).subscribe(
        () => {
          alert('Producto actualizado exitosamente');
          this.cargarDatos(); // Recargar los datos después de la actualización
          this.cancelarEdicion();  // Limpiar el formulario de edición
        },
        error => {
          alert('Hubo un error al actualizar el producto');
        }
      );
    }
  }
}

