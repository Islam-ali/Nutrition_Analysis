import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RootObject } from 'src/app/Models/NurtirationGET';

import { NutritionServiceService } from '../../Services/nutrition-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NurtitionModel } from '../../Models/NutritionModelPOST';
import { RootObjectIngr } from '../../Models/IngredientStructure';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  //RootObject To Access About NurtirationGET Model
   RootObjectPost: RootObject[] = [];

  //RootObjectIngr To Access About IngredientStructure Model
  RootObjectIngr : RootObjectIngr[] =[] ;

  // Define and Declare Variable
  NutritionFormPOST! : FormGroup;
  invalidData! : boolean;
  loading = false;
  arr: Array<string>= [];
  details: Array<string>= [];
  NurtitionModel!: NurtitionModel;
  ingr!: string[];
  invalid! : boolean;

  // CONSTRUCTOR
  constructor(@Inject(FormBuilder) fb: FormBuilder,
  public NutritionServiceService: NutritionServiceService,
  private router: Router, private SpinnerService: NgxSpinnerService)
    {
      const data = this.NurtitionModel;
      if (data == null) {
        this.ingr = [];
      } else
      {
        this.NurtitionModel = data;
        this.ingr = data.ingr;
      }
    this.NutritionFormPOST = fb.group({
      Inger : [this.ingr, [
        Validators.required,Validators.minLength(3)
      ]],
      IsCooking:['',Validators.required]
    });
    }

  get f()
  {
    return this.NutritionFormPOST.controls;
  }

  get IsCooking(){
    return this.NutritionFormPOST.get('IsCooking')?.value;
  }

  ngOnInit(): void {

  }



  // Split Method built to split enter text in Textarea and pass by value array splited in GET Method
Split(){
  var x = this.NutritionFormPOST.get('Inger')?.value.toString().replace(/^,+|,/g, '');
    // console.log("x",x);
    this.arr = [x.split(/[\n]+/)];
    // console.log("arr = "+this.arr[0].length+"= ",this.arr);
    for(let i = 0 ;i < this.arr[0]?.length; i++ )
    {
     if (this.NutritionFormPOST.controls != null){
      this.SpinnerService.show();
      // GET Method Calling
      // console.log("arr"+i,this.arr[0][i]);
      this.NutritionServiceService.getAllData(this.IsCooking,(this.arr[0][i])).subscribe((data:any) => {
      // console.log("ARRAY" +i,this.arr[0][i]);
      this.loading = true;
      this.RootObjectPost.push(data) ;
      // console.log("log",this.RootObjectPost);
      this.SpinnerService.hide();
      // PUSH Data in Summary Table
      this.details[i]=((this.arr[0][i])+" "+data.calories+" "+data.totalWeight);
    });
  }
  else {
    this.loading = false
    this.SpinnerService.hide();
    this.NutritionFormPOST.setErrors({
    invalidData : true,
  });
  }
}
this.invalid = true;
}

// SaveData Method built in Analyze all ingredient list Entered in TextArea
  saveData(): void {
    this.Split();
    if (this.NurtitionModel == null) {
        let NewInter = {
         ingr : this.NutritionFormPOST.get('Inger')?.value.split(/\n|\r/)
        };
        this.SpinnerService.show();
        this.loading = true;
        let handel ={
          next: (data:any) => {
            this.RootObjectPost = [data];
              this.SpinnerService.hide();
            },
              error: (err:Error) => {
                this.loading = false
                this.SpinnerService.hide();
                console.log(err);
              }
        }
        if (this.NutritionFormPOST.get('IsCooking')?.value === "cooking"){
          this.NutritionServiceService.CreateData(NewInter)
          .subscribe(handel);
        }
        else{
          this.NutritionServiceService.getAllData(this.IsCooking, this.NutritionFormPOST.get('Inger')?.value.split(/\n|\r/))
          .subscribe((data:any) => {
            this.RootObjectPost = [data];
            this.SpinnerService.hide();
          },
            error => {
              this.loading = false
              this.SpinnerService.hide();
              console.log(error);
            });

        }

      // GET Method to Get Spacific Data in Ingreadiant List another solution using IngredientStructure Model
        // this.NutritionServiceService.getAllDataIngr(this.NutritionFormPOST.get('Inger')?.value.split(/\n|\r/)).subscribe((data:any) =>
        // {
        // this.loading = true;
        // this.RootObjectIngr = [data];
        // this.SpinnerService.hide();
        // });
    }
    else{
     let NewInter = {
      ingr : this.NutritionFormPOST.get('Inger')?.value
     };

    }
  }

  // To Reload Page Again to New Recipe
NewRecipe(){
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
}

}
