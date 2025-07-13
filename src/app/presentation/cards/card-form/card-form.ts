import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Button } from '../../button/button';


@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './card-form.html',
  styleUrls: ['./card-form.css'],
})
export class CardForm {
  
  private fb = inject(FormBuilder);

  submitted = signal(false);

  form = this.fb.group({
    name: ['', [
      Validators.required, 
      Validators.minLength(3)]],
    balance: [0, [
      Validators.required, 
      Validators.min(0)]],
  });

  onSubmit() {
    this.submitted.set(true);
    if (this.form.valid) {
      console.log('✅ Card submitted:', this.form.value);
      // call your service here
    }
  }
}
