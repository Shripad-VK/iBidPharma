import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorHomeComponent } from './distributor-home.component';

describe('DistributorHomeComponent', () => {
  let component: DistributorHomeComponent;
  let fixture: ComponentFixture<DistributorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
