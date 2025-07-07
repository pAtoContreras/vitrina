import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz opcional para tipo de dato
export interface Contacto {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost:3000/contacto'; // Ajusta si tu backend está en otro puerto o dominio

  constructor(private http: HttpClient) {}

  enviarMensaje(contacto: Contacto): Observable<any> {
    return this.http.post(this.apiUrl, contacto);
  }
}
