import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../models/shipments.model';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsService {
  private urlApi = 'http://localhost:3000'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  // Función para obtener las cabeceras con el token de autorización
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, // Agrega el token a las cabeceras
    });
  }

  createShipment(shipment: Shipment): Observable<Shipment> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.post<Shipment>(`${this.urlApi}/shipments`, shipment, {
      headers: this.getHeaders(),
    });
  }

  getShipmentById(id: number): Observable<Shipment> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.get<Shipment>(`${this.urlApi}/shipments/${id}`, {
      headers: this.getHeaders(),
    });
  }

  deleteShipment(id: number): Observable<void> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.delete<void>(`${this.urlApi}/shipments/${id}`, {
      headers: this.getHeaders(),
    });
  }

  listShipments(): Observable<Shipment[]> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.get<Shipment[]>(`${this.urlApi}/shipments`, {
      headers: this.getHeaders(),
    });
  }
}
