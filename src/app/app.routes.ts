import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/home/home').then((m) => m.Home),
  },
  {
    path: 'cards/new',
    loadComponent: () =>
      import('./presentation/cards/card-form/card-form').then((m) => m.CardForm),
  },
  {
    path: 'cards/details',
    loadComponent: () =>
      import('./presentation/cards/card-details/card-details').then((m) => m.CardDetails),
  },
  {
    path: 'spend',
    loadComponent: () =>
      import('./presentation/transactions/spend-form/spend-form').then((m) => m.SpendForm),
  },
  {
    path: 'topup',
    loadComponent: () =>
      import('./presentation/transactions/topup-form/topup-form').then((m) => m.TopupForm),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./presentation/transactions/transaction-list/transaction-list').then((m) => m.TransactionList),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
