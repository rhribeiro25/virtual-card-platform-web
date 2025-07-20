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
    path: 'cards/details/:id',
    loadComponent: () =>
      import('./presentation/cards/card-details/card-details').then((m) => m.CardDetails),
  },
  {
    path: 'spend',
    loadComponent: () =>
      import('./presentation/transactions/transaction-spend/transaction-spend').then((m) => m.TransactionSpend),
  },
  {
    path: 'topup',
    loadComponent: () =>
      import('./presentation/transactions/transaction-topup/transaction-topup').then((m) => m.TransactionTopup),
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
