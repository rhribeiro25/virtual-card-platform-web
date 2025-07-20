import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../button/button';
import { CreateCardUseCase } from '../../../application/use-cases/card/create-card.usecase';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-card-form',
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
  templateUrl: './card-form.html',
  styleUrls: ['./card-form.css'],
})
export class CardForm {

  private fb = inject(FormBuilder).nonNullable;
  private createCardUseCase = inject(CreateCardUseCase);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar); 

  submitted = signal(false);

  form = this.fb.group({
    cardholderName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    initialBalance: this.fb.control(0, [Validators.required, Validators.min(0)]),
  });

  onSubmit() {
    this.submitted.set(true);
    if (this.form.valid) {
      const cardData = this.form.getRawValue();
      this.createCardUseCase.execute(cardData).subscribe({
        next: (response) => {
          this.snackBar.open('✅ Card created successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          this.router.navigate(['cards/details'], {
            state: { card: response }
          });
        },
        error: (error) => {
          console.error('❌ Failed to create card:', error);
        }
      });
    }
  }
}
