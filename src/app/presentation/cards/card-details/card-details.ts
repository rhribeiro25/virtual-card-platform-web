import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.html',
  styleUrl: './card-details.css'
})
export class CardDetails {
  private router = inject(Router);
  card = this.router.getCurrentNavigation()?.extras.state?.['card'];

  constructor() {
    console.log('📦 Card recebido via state:', this.card);
  }
}
