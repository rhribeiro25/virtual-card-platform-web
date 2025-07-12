import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/home/home').then((m) => m.Home),
  }
];
