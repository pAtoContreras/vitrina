import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosService, Modelo } from '../../services/modelos.service';

@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.css'
})
export class ModelosComponent implements OnInit {
  modelos: Modelo[] = [];
 centerIndex = 1;  // la card del medio resaltada
  hoverIndex: number | null = null;
  constructor(private modelosService: ModelosService) {}

  ngOnInit(): void {
    this.modelosService.getModelos().subscribe((data) => {
      this.modelos = data;
    });
  }
}
