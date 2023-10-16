/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiurlApi = 'http://localhost:3000'; // Asegúrate de configurar la URL de tu API

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiurlApi}/users`, user);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiurlApi}/users/${userId}`);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiurlApi}/users/${userId}`);
  }
}
