import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  template: `
    <button
      mat-raised-button
      [color]="color"
      [type]="type"
      [disabled]="disabled"
      [routerLink]="routerLink">
      {{ label }}
    </button>
  `,
})
export class Button {
  @Input() label: 'Save' | 'Home' | 'Cancel' | 'Spend' | 'Topup' = 'Save';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() routerLink: string | any[] | null = null;
}
