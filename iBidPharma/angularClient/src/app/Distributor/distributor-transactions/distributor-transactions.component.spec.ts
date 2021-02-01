import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorTransactionsComponent } from './distributor-transactions.component';

describe('DistributorTransactionsComponent', () => {
  let component: DistributorTransactionsComponent;
  let fixture: ComponentFixture<DistributorTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
