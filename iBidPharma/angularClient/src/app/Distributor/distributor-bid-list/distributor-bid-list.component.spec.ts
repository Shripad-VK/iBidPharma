import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorBidListComponent } from './distributor-bid-list.component';

describe('DistributorBidListComponent', () => {
  let component: DistributorBidListComponent;
  let fixture: ComponentFixture<DistributorBidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorBidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorBidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
