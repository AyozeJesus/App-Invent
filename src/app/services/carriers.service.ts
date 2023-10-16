import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrier } from '../models/carriers.model';

@Injectable({
  providedIn: 'root',
})
export class CarriersService {
  private urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Función para obtener las cabeceras con el token de autorización
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, // Agrega el token a las cabeceras
    });
  }

  listCarriers(): Observable<Carrier[]> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.get<Carrier[]>(`${this.urlApi}/carriers`, {
      headers: this.getHeaders(),
    });
  }

  createCarrier(newCarrier: Carrier): Observable<Carrier> {
    return this.http.post<Carrier>(`${this.urlApi}/carrier`, newCarrier, {
      headers: this.getHeaders(),
    });
  }

  getCarrierById(carrierId: number): Observable<Carrier> {
    return this.http.get<Carrier>(`${this.urlApi}/carrier/${carrierId}`, {
      headers: this.getHeaders(),
    });
  }

  updateCarrier(
    carrierId: number,
    updatedCarrier: Carrier
  ): Observable<Carrier> {
    return this.http.put<Carrier>(
      `${this.urlApi}/carrier/${carrierId}`,
      updatedCarrier,
      { headers: this.getHeaders() }
    );
  }

  deleteCarrier(carrierId: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/carrier/${carrierId}`, {
      headers: this.getHeaders(),
    });
  }
}
