// application/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPageResponse } from '../../../shared/dtos/transaction-page-response';
import { CardClient } from '../../../infrastructure/adapter/rest/card-client'; // ou transaction-client

@Injectable({ providedIn: 'root' })
export class TransactionUseCase {
  constructor(private cardClient: CardClient) {}

  getTransactionsByCard(cardId: string, page: number, size: number): Observable<TransactionPageResponse> {
    return this.cardClient.getTransactions(cardId, page, size);
  }
}
