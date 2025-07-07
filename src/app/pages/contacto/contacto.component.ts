import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoService } from '../../services/contacto.service'; // Asegúrate que esté en la misma carpeta o ajusta el path
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    comentario: ''
  };
  bgClass = 'bg-primary';

  enviado = false;
  error = '';

  constructor(private contactoService: ContactoService, private themeService: ThemeService) {}

  enviarContacto() {
    this.contactoService.enviarMensaje(this.contacto).subscribe({
      next: (res) => {
        this.enviado = true;
        this.contacto = { nombre: '', apellido: '', telefono: '', email: '', comentario: '' };
      },
      error: (err) => {
        this.error = 'Ocurrió un error al enviar el formulario.';
        console.error(err);
      }
    });
  }
    ngOnInit() {
    this.themeService.getTheme().subscribe((theme: Theme) => {
      this.bgClass = theme.bg_class;
    });
  }
}
