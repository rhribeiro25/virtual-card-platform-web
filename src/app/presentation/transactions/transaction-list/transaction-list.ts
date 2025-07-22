import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Transaction } from '../../../shared/dtos/transaction-page-response';
import { TransactionUseCase } from '../../../application/use-cases/transaction/list-transaction-usecase';
import { LocalStorageUtil } from '../../../shared/utils/local-storage-util';
import { CardResponse } from '../../../shared/dtos/card-response';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionList {
  private transactionUsecase= inject(TransactionUseCase);
  transactions: Transaction[] = [];

  displayedColumns: string[] = ['id', 'type', 'amount', 'createdAt'];
  dataSource = new MatTableDataSource<Transaction>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    const card = LocalStorageUtil.getItem<CardResponse>('card');
    
    if(card != null){
      this.transactionUsecase.getTransactionsByCard(card?.id, 0, 5).subscribe({
        next: (response) => {
          this.transactions = response.content;
          console.log('✅ Lista de transações:', this.transactions);
        },
        error: (err) => {
          console.error('❌ Erro ao buscar transações:', err);
        },
        complete: () => {
          this.dataSource.data = this.transactions;
          console.log('🔁 Busca de transações finalizada');
        }
      });
    }
    
  }
}
