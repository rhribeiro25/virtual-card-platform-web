import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Button } from '../../button/button';
import { LocalStorageUtil } from '../../../shared/utils/local-storage-util';
import { CardResponse } from '../../../shared/dtos/card-response';

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
  card: any;

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['card'] != null) {
      this.card = navigation?.extras?.state?.['card'];
      console.log('📦 Card received by state:', this.card);
    } else {
      this.card = LocalStorageUtil.getItem<CardResponse>('card');
      console.log('📦 Card received by local storage:', this.card);
    }
    
  }
} 
