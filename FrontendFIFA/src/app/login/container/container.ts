import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,          
  imports: [],
  templateUrl: './container.html',
  styleUrls: ['./container.scss']
})
export class ContainerComponent {
  constructor(private router: Router) {}
}
