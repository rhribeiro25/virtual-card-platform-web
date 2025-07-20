import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardRequest } from '../../../shared/dtos/card-request'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class CardClient {
  private baseUrl = '/cards';

  constructor(private http: HttpClient) {}

  createCard(card : CardRequest): Observable<any> {
    return this.http.post(this.baseUrl, card);
  }
}
