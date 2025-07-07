import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PresupuestoService, Presupuesto } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css'
})
export class PresupuestoComponent {
  presupuesto: Presupuesto = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    servicio: '',
    detalles: ''
  };

  mensajeExito: boolean = false;

  constructor(private presupuestoService: PresupuestoService) {}

  enviarPresupuesto() {
    this.presupuestoService.enviarPresupuesto(this.presupuesto).subscribe({
      next: () => {
        this.mensajeExito = true;
        this.presupuesto = {
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          servicio: '',
          detalles: ''
        };

        // Ocultar mensaje luego de 3 segundos
        setTimeout(() => {
          this.mensajeExito = false;
        }, 3000);
      },
      error: (error) => {
        console.error('Error al enviar presupuesto:', error);
        alert('Ocurrió un error al enviar el presupuesto.');
      }
    });
  }
}
