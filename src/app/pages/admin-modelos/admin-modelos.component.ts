import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // para ngModel
import { ModelosService, Modelo } from '../../services/modelos.service';

@Component({
  selector: 'app-admin-modelos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-modelos.component.html',
  styleUrls: ['./admin-modelos.component.css']
})
export class AdminModelosComponent {
  modelos: Modelo[] = [];

  modeloForm: Modelo = {
    id: null, // usar null porque aún no existe cuando se crea
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  editing = false; // indica si está editando o creando

  constructor(private modelosService: ModelosService) {
    this.loadModelos();
  }

  loadModelos(): void {
    this.modelosService.getModelos().subscribe(data => {
      this.modelos = data;
    });
  }

  saveModelo(): void {
    if (this.editing && this.modeloForm.id !== null) {
      this.modelosService.updateModelo(this.modeloForm.id, this.modeloForm).subscribe(() => {
        this.loadModelos();
        this.resetForm();
      });
    } else {
      this.modelosService.addModelo(this.modeloForm).subscribe(() => {
        this.loadModelos();
        this.resetForm();
      });
    }
  }

  editModelo(modelo: Modelo): void {
    this.modeloForm = { ...modelo };
    this.editing = true;
  }

deleteModelo(id: number | null): void {
  if (id === null) return;
  this.modelosService.deleteModelo(id).subscribe(() => {
    this.loadModelos();
  });
}

  resetForm(): void {
    this.modeloForm = {
      id: null,
      nombre: '',
      descripcion: '',
      imagen: ''
    };
    this.editing = false;
  }
}
