import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Button } from '../../button/button';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    Button
  ],
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
