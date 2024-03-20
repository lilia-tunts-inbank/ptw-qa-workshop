import {Drink} from './drink'
import {SyrupType} from '../enums/syrup-type'

export class Coffee extends Drink {

  amountOfMilk: number;
  hasSyrup: boolean;
  syrupAmount: number; // num of drops
  syrupType: SyrupType;

  constructor(inputAmount: number,
              inputTemperature: number,
              inputIce: boolean,
              inputMilk: number,
              inputHasSyrup: boolean,
              inputSyrupAmount: number,
              inputSyrupType: SyrupType) {
    // super -> drink.constructor()
    super(inputAmount, inputTemperature, inputIce);
    this.amountOfMilk = inputMilk;
    this.checkSyrup(inputHasSyrup, inputSyrupAmount, inputSyrupType);
  }

  private checkSyrup(inputHasSyrup: boolean,
                     inputSyrupAmount: number,
                     inputSyrupType: SyrupType): void {
    if (inputHasSyrup && inputSyrupAmount < 1 || !inputHasSyrup && inputSyrupAmount > 0) {
      console.log('Incorrect syrup input, setting no syrup.');
      this.hasSyrup = false;
      this.syrupAmount = 0;
      this.syrupType = null;
    } else if (inputHasSyrup && inputSyrupAmount > 5) {
      this.hasSyrup = inputHasSyrup;
      this.syrupAmount = 5;
      this.syrupType = inputSyrupType;
    } else if (inputHasSyrup && inputSyrupAmount > 0) {
      this.hasSyrup = inputHasSyrup;
      this.syrupAmount = inputSyrupAmount;
      this.syrupType = inputSyrupType;
    }
  }
}