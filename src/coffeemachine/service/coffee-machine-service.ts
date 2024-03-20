import {Espresso} from "../models/espresso";
import {Cappuccino} from "../models/cappuccino";
import {Coffee} from "../models/coffee";
import {SyrupType} from "../enums/syrup-type";

export class CoffeeMachineService {

  public static makeEspresso(inputAmount: number,
                             inputIce: boolean): Espresso {
    return new Espresso(inputAmount, 90, inputIce, 0,
        false, 0, null);
  }

  public static makeCappuccino(inputAmount: number,
                               inputIce: boolean,
                               inputHasSyrup: boolean,
                               inputSyrupAmount: number,
                               inputSyrupType: SyrupType,
                               inputFoamingTime: number): Cappuccino {
    const inputMilk: number = inputAmount * 0.3;
    return new Cappuccino(inputAmount, 87, inputIce, inputMilk,
        inputHasSyrup, inputSyrupAmount, inputSyrupType, inputFoamingTime);
  }

  public static makeCoffee(inputAmount: number,
                           inputTemperature: number,
                           inputIce: boolean,
                           inputMilk: number,
                           inputHasSyrup: boolean,
                           inputSyrupAmount: number,
                           inputSyrupType: SyrupType): Coffee {
    if (inputAmount - inputMilk < 20) {
      console.log("Too much milk, not a real coffee!!");
      return null;
    } else if (inputTemperature > 98) {
      console.log("Please do not burn the coffee, you coffee-sadist!");
      return null;
    }
    return new Coffee(inputAmount, inputTemperature, inputIce, inputMilk,
        inputHasSyrup, inputSyrupAmount, inputSyrupType);
  }
}
