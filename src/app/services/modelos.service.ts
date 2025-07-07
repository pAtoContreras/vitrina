import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Modelo {
  id: number | null;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
private apiUrl = 'http://localhost:3000/modelos';

constructor(private http: HttpClient) {}

getModelos(): Observable<Modelo[]> {
  return this.http.get<Modelo[]>(this.apiUrl);
}

addModelo(modelo: Modelo): Observable<Modelo> {
  return this.http.post<Modelo>(this.apiUrl, modelo);
}

updateModelo(id: number, modelo: Modelo): Observable<Modelo> {
  return this.http.put<Modelo>(`${this.apiUrl}/${id}`, modelo);
}

deleteModelo(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
