import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../../models/shipments.model';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsService {
  private urlApi = 'http://localhost:3000'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  createShipment(shipment: Shipment): Observable<Shipment> {
    return this.http.post<Shipment>(`${this.urlApi}/shipments`, shipment);
  }

  getShipmentById(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.urlApi}/shipments/${id}`);
  }

  deleteShipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/shipments/${id}`);
  }

  listShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.urlApi}/shipments`);
  }
}
