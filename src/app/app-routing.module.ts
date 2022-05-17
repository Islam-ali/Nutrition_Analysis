import { CalorieCalculationComponent } from './Components/calorie-calculation/calorie-calculation.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NutritionComponent } from './Components/nutrition/nutrition.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'Nutrition', component: NutritionComponent},
  {path: 'Calculation', component: CalorieCalculationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
