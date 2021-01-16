import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporGenerationComponent } from './repor-generation.component';

describe('ReporGenerationComponent', () => {
  let component: ReporGenerationComponent;
  let fixture: ComponentFixture<ReporGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
