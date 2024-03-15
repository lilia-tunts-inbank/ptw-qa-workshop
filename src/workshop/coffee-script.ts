const MY_NAME: string = 'Lilia';
let myMilkAmount: number = 50;
let myCoffeeType: string = 'cappuccino';

console.log(`Hello, ${MY_NAME}! Your coffee is ${myCoffeeType} and it has ${myMilkAmount} ml.`)
console.log('Hello, ' + MY_NAME + '! Your coffee is' + myCoffeeType + 'and it has ' + myMilkAmount + 'ml.')

if (myMilkAmount > 50) {
  console.log('Too much milk, not a real coffee!');
} else {
  console.log('Preparing your coffee');
}

if (isTooMuchMilk()) {
  console.log(muchMilkString() + muchMilkResult(false));
} else if (myMilkAmount >= 100) {
  console.log(muchMilkString() + ', ' + muchMilkResult(true));
} else if (myCoffeeType === 'cappuccino') {
  console.log('Perfect choice');
} else {
  console.log('All good, making coffee of your choice');
}

muchMilkResult1(true);
muchMilkResult2(false);

// F7 - go into method
// F8 - go next line
// F9 - go next breakpoint

function muchMilkResult(isNotRealCoffee: boolean): string {
  return isNotRealCoffee ? 'not a real coffee!' : ' for other coffee types'
}

// just an example, not going to use that
function muchMilkResult1(isNotRealCoffee: boolean): string {
  if (isNotRealCoffee) {
    return 'not a real coffee!';
  }
  return ' for other coffee types';
}

// just an example, not going to use that
function muchMilkResult2(isNotRealCoffee: boolean): string {
  let result: string = '';
  if (isNotRealCoffee) {
    result = 'not a real coffee!';
  } else {
    result = ' for other coffee types'
  }
  return result;
}

function isTooMuchMilk(): boolean {
  return myMilkAmount > 50 && myCoffeeType !== 'latte';
}

function muchMilkString(): string {
  return 'Too much milk';
}
