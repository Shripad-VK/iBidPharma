import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaufacturerProductListComponent } from './maufacturer-product-list.component';

describe('MaufacturerProductListComponent', () => {
  let component: MaufacturerProductListComponent;
  let fixture: ComponentFixture<MaufacturerProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaufacturerProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaufacturerProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
