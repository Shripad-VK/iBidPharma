import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBidsComponent } from './show-bids.component';

describe('ShowBidsComponent', () => {
  let component: ShowBidsComponent;
  let fixture: ComponentFixture<ShowBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
