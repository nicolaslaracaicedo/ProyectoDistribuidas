import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private apiUrl = 'https://k3zih528gl.execute-api.us-east-1.amazonaws.com/';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  postDatos(data: { itemName: string, category: string, quantity: number, description: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, data);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }

  updateProducto(id: string, data: { itemName: string, category: string, quantity: number, description: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${id}`, data);
  }
}
