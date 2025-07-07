import { Component, OnInit } from '@angular/core';
import { CarouselService, CarouselItem } from '../../services/carousel.service';
import { CommonModule } from '@angular/common'; // 👈 necesario para *ngIf, *ngFor, etc.

@Component({
  selector: 'app-carousel',
  standalone: true,
    imports: [CommonModule], // 👈 esto habilita *ngIf y otras directivas

  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: CarouselItem[] = [];

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService.getImages().subscribe(data => {
      this.images = data;
    });
  }
}
