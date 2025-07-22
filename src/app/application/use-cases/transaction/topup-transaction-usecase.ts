import { Injectable } from '@angular/core';
import { CardClient } from '../../../infrastructure/adapter/rest/card-client';
import { Observable } from 'rxjs';
import { TopupRequest } from '../../../shared/dtos/topup-request';

@Injectable({ providedIn: 'root' })
export class TopupTransactionUseCase {
  constructor(private cardClient: CardClient) {}

  execute(cardId: string, topup: TopupRequest): Observable<any> {
    return this.cardClient.topup(cardId, topup);
  }
}

