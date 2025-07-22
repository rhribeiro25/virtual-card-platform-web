export interface TransactionPageResponse {
  content: Transaction[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Transaction {
  id: string;
  cardId: string;
  type: 'SPEND' | 'TOPUP';
  amount: number;
  createdAt: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
