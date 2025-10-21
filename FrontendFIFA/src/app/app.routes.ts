import { Routes } from '@angular/router';
import { RegisterContainerComponent } from '../app/register/container/formContainer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterContainerComponent },
];
