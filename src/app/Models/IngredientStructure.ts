  export interface ENERCKCAL {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FAT {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FASAT {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FAMS {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FAPU {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface CHOCDF {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FIBTG {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface SUGAR {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface TotalNutrients {
      ENERC_KCAL: ENERCKCAL;
      FAT: FAT;
      FASAT: FASAT;
      FAMS: FAMS;
      FAPU: FAPU;
      CHOCDF: CHOCDF;
      FIBTG: FIBTG;
      SUGAR: SUGAR;
  }

  export interface ENERCKCAL2 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FAT2 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FASAT2 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface CHOCDF2 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FIBTG2 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface TotalDaily {
      ENERC_KCAL: ENERCKCAL2;
      FAT: FAT2;
      FASAT: FASAT2;
      CHOCDF: CHOCDF2;
      FIBTG: FIBTG2;
  }

  export interface PROCNT {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface FAT3 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface CHOCDF3 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface ENERCKCAL3 {
      label: string;
      quantity: number;
      unit: string;
  }

  export interface SUGAR2 {
      label: string;
      quantity: number;
      unit: string;
  }


  export interface Nutrients {
      PROCNT: PROCNT;
      FAT: FAT3;
      CHOCDF: CHOCDF3;
      ENERC_KCAL: ENERCKCAL3;
      SUGAR: SUGAR2;
  }

  export interface Parsed {
      quantity: number;
      measure: string;
      foodMatch: string;
      food: string;
      foodId: string;
      weight: number;
      retainedWeight: number;
      nutrients: Nutrients;
  }

  export interface Ingredient {
      text: string;
      parsed: Parsed;
  }

  export interface RootObjectIngr {
      uri: string;
      calories: number;
      totalWeight: number;
      dietLabels: string;
      healthLabels: string;
      cautions: any;
      totalNutrients: TotalNutrients;
      totalDaily: TotalDaily;
      ingredients: Ingredient;
  }


