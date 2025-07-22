import { Injectable } from '@angular/core';
import { CardClient } from '../../../infrastructure/adapter/rest/card-client';
import { Observable } from 'rxjs';
import { CardRequest } from '../../../shared/dtos/card-request';

@Injectable({ providedIn: 'root' })
export class CreateCardUseCase {
  constructor(private cardClient: CardClient) {}

  execute(card: CardRequest): Observable<any> {
    return this.cardClient.createCard(card);
  }
}
