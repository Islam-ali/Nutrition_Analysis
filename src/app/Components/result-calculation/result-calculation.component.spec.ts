import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCalculationComponent } from './result-calculation.component';

describe('ResultCalculationComponent', () => {
  let component: ResultCalculationComponent;
  let fixture: ComponentFixture<ResultCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
