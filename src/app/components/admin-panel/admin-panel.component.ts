import { Component } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  standalone: true
})
export class AdminPanelComponent {
  constructor(private themeService: ThemeService) {}

cambiarClase(bg: string, text: string) {
  const nuevoTema: Theme = {
    id: 1,
    bg_class: bg,
    text_class: text
  };

  this.themeService.updateTheme(nuevoTema).subscribe(() => {
    alert('Tema actualizado con éxito');
  });
}

  }

