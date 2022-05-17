import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculation',
  templateUrl: './calorie-calculation.component.html',
  styleUrls: ['./calorie-calculation.component.scss']
})
export class CalorieCalculationComponent implements OnInit {
  myForm: FormGroup;
  message:string = '';
  calc!:number ;
  loading:boolean=false;
  constructor() {
    this.myForm = new FormGroup({
      weight: new FormControl(),
      height: new FormControl(),
      age: new FormControl(),
      activity: new FormControl(),
      gender: new FormControl()

    });
   }

  ngOnInit(): void {
  }
  onSubmit(form: FormGroup) {
    this.loading = true;
    if(form.valid)
    {
      if(form.value.gender == 'male')
      {
        let CalorieMale = (10 * form.value.weight ) + (6.25 * form.value.height) - (5 * form.value.age) +5
        this.calc = form.value.activity * CalorieMale
        this.loading = false
      }
      if(form.value.gender == 'female')
      {
        let CalorieFemale = (10 * form.value.weight ) + (6.25 * form.value.height) - (5 * form.value.age) -161
        this.calc = form.value.activity * CalorieFemale
        this.loading = false
      }
    }
    else{
      this.message = 'comblete all form'
    }
    console.log(this.calc)
  }
}
