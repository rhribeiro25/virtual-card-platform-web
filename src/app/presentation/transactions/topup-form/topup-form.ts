import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../button/button';
import { TopupTransactionUseCase } from '../../../application/use-cases/transaction/topup-transaction-usecase';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageUtil } from '../../../shared/utils/local-storage-util';
import { CardResponse } from '../../../shared/dtos/card-response';

@Component({
  selector: 'app-topup-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    Button
  ],
  templateUrl: './topup-form.html',
  styleUrls: ['./topup-form.css'],
})

export class TopupForm {
  private fb = inject(FormBuilder).nonNullable;
  private topupTransactionUseCase = inject(TopupTransactionUseCase);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar); 

  submitted = signal(false);

  form = this.fb.group({
    amount: this.fb.control(0, [Validators.required, Validators.min(1)])
  });

  onSubmit() {
    this.submitted.set(true);
    const card = LocalStorageUtil.getItem<CardResponse>('card');

    if (this.form.valid) {
      const payload = {
        ...this.form.getRawValue(),
        requestId: uuidv4()
      };
      if(card != null)
        this.topupTransactionUseCase.execute(card.id, payload).subscribe({
          next: (response) => {
            this.snackBar.open('✅ Topup Transaction completed!', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            LocalStorageUtil.setItem<CardResponse>('card', response);
            this.router.navigate(['cards/details'], {
              state: { card: response }
            });
          },
          error: (response) => {
            console.error('❌ Topup failed:', response.error);
            this.snackBar.open('❌' + response.error.message, 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          }
        });
      }
  }
}

