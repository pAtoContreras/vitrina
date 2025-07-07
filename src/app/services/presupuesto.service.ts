import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Presupuesto {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  servicio: string;
  detalles: string;
}

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private apiUrl = 'http://localhost:3000/presupuestos'; // adaptá a tu backend

  constructor(private http: HttpClient) {}

  enviarPresupuesto(presupuesto: Presupuesto): Observable<any> {
    return this.http.post(this.apiUrl, presupuesto);
  }
}
