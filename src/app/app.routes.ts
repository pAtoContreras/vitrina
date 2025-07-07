import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdminModelosComponent } from './pages/admin-modelos/admin-modelos.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'admin-modelos', component: AdminModelosComponent },
  { path: 'admin-panel', component: AdminPanelComponent}, // <--- Aquí la ruta para el admin
  { path: '**', redirectTo: '', pathMatch: 'full' }
];