import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NutritionComponent } from './Components/nutrition/nutrition.component';
import { ObjToArrayPipe } from './Shared/Pipes/obj-to-array.pipe';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CalorieCalculationComponent } from './Components/calorie-calculation/calorie-calculation.component';
import { ResultCalculationComponent } from './Components/result-calculation/result-calculation.component';
// import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NutritionComponent,
    ObjToArrayPipe,
    CalorieCalculationComponent,
    ResultCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule ,
    BrowserAnimationsModule,
    // MatDialogModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
