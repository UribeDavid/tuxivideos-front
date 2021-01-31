import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserva } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cargarCatalogo() {
    return this.http.get(`${this.apiUrl}/api/v1/catalog/movies`);
  }

  reservar(body: Reserva) {
    return this.http.post(`${this.apiUrl}/api/v1/catalog/book`, body);
  }
}
