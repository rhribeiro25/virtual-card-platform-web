import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../button/button';
import { CreateCardUseCase } from '../../../application/use-cases/card/create-card.usecase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './card-form.html',
  styleUrls: ['./card-form.css'],
})
export class CardForm {

  private fb = inject(FormBuilder).nonNullable;
  private createCardUseCase = inject(CreateCardUseCase);
  private router = inject(Router);

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
          console.log('✅ Card created:', response);
          this.form.reset();
          this.router.navigate(['cards/details', response.id]);
        },
        error: (error) => {
          console.error('❌ Failed to create card:', error);
        }
      });
    }
  }
}
