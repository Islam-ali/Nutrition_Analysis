import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NutritionComponent } from '../Components/nutrition/nutrition.component';

import { NutritionServiceService } from './nutrition-service.service';

describe('NutritionServiceService', () => {
  let service: NutritionServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

      ],
      declarations: [
        NutritionComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
      ]
    }).compileComponents()
  }))
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

