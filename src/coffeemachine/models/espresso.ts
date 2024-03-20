import {Coffee} from "./coffee";
import {SyrupType} from "../enums/syrup-type";

export class Espresso extends Coffee {
  constructor(inputAmount: number,
              inputTemperature: number,
              inputIce: boolean,
              inputMilk: number,
              inputHasSyrup: boolean,
              inputSyrupAmount: number,
              inputSyrupType: SyrupType) {
    super(inputAmount, inputTemperature, inputIce, inputMilk,
        inputHasSyrup, inputSyrupAmount, inputSyrupType);
  }
}