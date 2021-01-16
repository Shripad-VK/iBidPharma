import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManufacturerComponent } from './search-manufacturer.component';

describe('SearchManufacturerComponent', () => {
  let component: SearchManufacturerComponent;
  let fixture: ComponentFixture<SearchManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
