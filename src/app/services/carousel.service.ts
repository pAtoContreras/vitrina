import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CarouselItem {
  id: number;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private apiUrl = 'http://localhost:3000/carousel';

  constructor(private http: HttpClient) {}

  getImages(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>(this.apiUrl);
  }
}
