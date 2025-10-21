import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterFormComponent} from '../form/form.component';

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './container.component.html',
 
})
export class RegisterContainerComponent {
  constructor(private router: Router) {}

  onRegister(data: { name: string; email: string; password: string }) {
    if (data.email && data.password && data.name) {
      alert(`Usuario ${data.name} registrado correctamente`);
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingrese nuevamente sus datos!');
    }
  }
}
