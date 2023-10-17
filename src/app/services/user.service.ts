import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/register`, user, {
      headers: this.getHeaders(),
    });
  }

  login(email: string, password: string): Observable<{ token: string }> {
    const body = { email, password };
    return this.http.post<{ token: string }>(`${this.apiUrl}/user/login`, body);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`, {
      headers: this.getHeaders(),
    });
  }

  getUsersByCategory(category: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users/category/${category}`, {
      headers: this.getHeaders(),
    });
  }
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${userId}`, {
      headers: this.getHeaders(),
    });
  }
}
