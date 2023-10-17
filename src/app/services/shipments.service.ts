import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../models/shipments.model';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsService {
  private urlApi = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, 
    });
  }

  createShipment(shipment: Shipment): Observable<Shipment> {

    return this.http.post<Shipment>(`${this.urlApi}/shipments`, shipment, {
      headers: this.getHeaders(),
    });
  }

  getShipmentById(id: number): Observable<Shipment> {

    return this.http.get<Shipment>(`${this.urlApi}/shipments/${id}`, {
      headers: this.getHeaders(),
    });
  }

  deleteShipment(id: number): Observable<void> {

    return this.http.delete<void>(`${this.urlApi}/shipments/${id}`, {
      headers: this.getHeaders(),
    });
  }

  listShipments(): Observable<Shipment[]> {

    return this.http.get<Shipment[]>(`${this.urlApi}/shipments`, {
      headers: this.getHeaders(),
    });
  }
}
