import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTopup } from './transaction-topup';

describe('TransactionTopup', () => {
  let component: TransactionTopup;
  let fixture: ComponentFixture<TransactionTopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionTopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
