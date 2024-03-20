export abstract class Drink {

  // fields
  amount: number;
  temperature: number;
  hasIce: boolean;

  // constructor definition
  constructor(inputAmount: number, inputTemperature: number, inputIce: boolean) {
    this.amount = inputAmount;
    this.temperature = inputTemperature;
    this.hasIce = inputIce;
  }

  // methods (behaviour)
}