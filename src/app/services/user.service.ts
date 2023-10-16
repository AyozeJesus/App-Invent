import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de configurar la URL de tu API

  constructor(private http: HttpClient) {}

  // Función para obtener las cabeceras con el token de autorización
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, // Agrega el token a las cabeceras
    });
  }

  createUser(user: User): Observable<User> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.post<User>(`${this.apiUrl}/user/register`, user, {
      headers: this.getHeaders(),
    });
  }

  login(email: string, password: string): Observable<{ token: string }> {
    const body = { email, password };
    return this.http.post<{ token: string }>(`${this.apiUrl}/user/login`, body);
  }

  getUserById(userId: number): Observable<User> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`, {
      headers: this.getHeaders(),
    });
  }

  getUsersByCategory(category: string): Observable<User[]> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.get<User[]>(`${this.apiUrl}/users/category/${category}`, {
      headers: this.getHeaders(),
    });
  }
  deleteUser(userId: number): Observable<void> {
    // Utiliza las cabeceras con el token al hacer la solicitud
    return this.http.delete<void>(`${this.apiUrl}/users/${userId}`, {
      headers: this.getHeaders(),
    });
  }
}
