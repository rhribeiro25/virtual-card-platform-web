import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendForm } from './spend-form';

describe('SpendForm', () => {
  let component: SpendForm;
  let fixture: ComponentFixture<SpendForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
