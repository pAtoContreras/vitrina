import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from '../modelos/modelos.component'; // ajustá el path si es diferente
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InformativoComponent } from '../../components/informativo/informativo.component';
import { ContactoComponent } from "../contacto/contacto.component";
import { TrabajosComponent } from "../trabajos/trabajos.component";
import { PresupuestoComponent } from "../presupuesto/presupuesto.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModelosComponent, CarouselComponent, InformativoComponent, ContactoComponent, TrabajosComponent, PresupuestoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 particles: any[] = [];

  ngOnInit() {
    this.generateParticles(60); // cantidad
  }

  generateParticles(count: number) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10
      });
    }
  }
}
