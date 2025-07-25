import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardRequest } from '../../../shared/dtos/card-request';
import { CardResponse } from '../../../shared/dtos/card-response';
import { SpendRequest } from '../../../shared/dtos/spend-request';
import { TopupRequest } from '../../../shared/dtos/topup-request';
import { TransactionPageResponse } from '../../../shared/dtos/transaction-page-response';

@Injectable({
  providedIn: 'root',
})
export class CardClient {
  private baseUrl = '/cards';

  constructor(private http: HttpClient) {}

  createCard(card : CardRequest): Observable<CardResponse> {
    return this.http.post<CardResponse>(this.baseUrl, card);
  }

  spend(cardId: string, payload: SpendRequest): Observable<CardResponse> {
    return this.http.post<CardResponse>(`${this.baseUrl}/${cardId}/spend`, payload);
  }
  
  topup(cardId: string, payload: TopupRequest): Observable<CardResponse> {
    return this.http.post<CardResponse>(`${this.baseUrl}/${cardId}/topup`, payload);
  }

  getTransactions(cardId: string, page: number, size: number): Observable<TransactionPageResponse> {
    const url = `${this.baseUrl}/${cardId}/transactions?page=${page}&size=${size}`;
    return this.http.get<TransactionPageResponse>(url);
  }
}
