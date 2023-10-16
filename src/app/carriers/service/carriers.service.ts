import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrier } from '../../models/carriers.model';

@Injectable({
  providedIn: 'root',
})
export class CarriersService {
  private urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(`${this.urlApi}/carriers`);
  }
}
