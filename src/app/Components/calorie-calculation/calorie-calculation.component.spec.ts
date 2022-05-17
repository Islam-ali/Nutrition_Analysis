import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCalculationComponent } from './calorie-calculation.component';

describe('CalorieCalculationComponent', () => {
  let component: CalorieCalculationComponent;
  let fixture: ComponentFixture<CalorieCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
