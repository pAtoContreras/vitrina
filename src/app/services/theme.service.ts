import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Theme {
  id: number;
  bg_class: string;
  text_class: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private apiUrl = 'http://localhost:3000/api/theme';

  private headerClassSubject = new BehaviorSubject<string>('bg-primary text-white');
  headerClass$ = this.headerClassSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTheme();
  }

  // ✅ Agregado para que header.component.ts no tire error
  getTheme() {
    return this.http.get<Theme>(this.apiUrl);
  }

  loadTheme() {
    this.getTheme().subscribe((data) => {
      const clase = `${data.bg_class} ${data.text_class}`;
      this.headerClassSubject.next(clase);
    });
  }

  updateTheme(nuevoTema: Theme) {
    return this.http.put(this.apiUrl, nuevoTema).pipe(
      tap(() => {
        const clase = `${nuevoTema.bg_class} ${nuevoTema.text_class}`;
        this.headerClassSubject.next(clase);
      })
    );
  }
}
