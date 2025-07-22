import { Injectable } from '@angular/core';
import { CardClient } from '../../../infrastructure/adapter/rest/card-client';
import { Observable } from 'rxjs';
import { SpendRequest } from '../../../shared/dtos/spend-request';

@Injectable({ providedIn: 'root' })
export class SpendTransactionUseCase {
  constructor(private cardClient: CardClient) {}

  execute(cardId: string, spend: SpendRequest): Observable<any> {
    return this.cardClient.spend(cardId, spend);
  }
}

