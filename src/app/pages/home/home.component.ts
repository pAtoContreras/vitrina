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
export class HomeComponent {}
