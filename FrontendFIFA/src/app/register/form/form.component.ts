import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  
})
export class RegisterFormComponent {
  name = '';
  email = '';
  password = '';

  @Output() registerSubmit = new EventEmitter<{ name: string; email: string; password: string }>();

  onSubmit() {
    this.registerSubmit.emit({ name: this.name, email: this.email, password: this.password });
  }
}
