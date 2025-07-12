import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spend } from './spend';

describe('Spend', () => {
  let component: Spend;
  let fixture: ComponentFixture<Spend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
