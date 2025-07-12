import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSpend } from './transaction-spend';

describe('TransactionSpend', () => {
  let component: TransactionSpend;
  let fixture: ComponentFixture<TransactionSpend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionSpend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionSpend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
