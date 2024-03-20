import {Coffee} from "./coffee";
import {SyrupType} from "../enums/syrup-type";


export class Cappuccino extends Coffee {

  foamingTime: number; // in second

  constructor(inputAmount: number,
              inputTemperature: number,
              inputIce: boolean,
              inputMilk: number,
              inputHasSyrup: boolean,
              inputSyrupAmount: number,
              inputSyrupType: SyrupType,
              inputFoamingTime: number) {
    // super -> coffee.constructor()
    super(inputAmount, inputTemperature, inputIce, inputMilk,
        inputHasSyrup, inputSyrupAmount, inputSyrupType);
    this.foamingTime = inputFoamingTime;
  }

}