const DRINK_TYPES: string[] = ['coffee', 'matcha', 'beer', 'tea', 'bubbletea', 'cappuccino', 'cocoa'];

// for each loops
for (const index in DRINK_TYPES) {
  console.log(index + ': ' + DRINK_TYPES[index]);
}

for (const drink of DRINK_TYPES) {
  console.log(drink + ': ' + DRINK_TYPES.indexOf(drink));
}

// for-i loops
// i++ -> i = i + 1
// i-- -> i = i - 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// [a, b, c] - length is 3
//  0  1  2
// index = 3 - ?
for (let i: number = 0; i <= DRINK_TYPES.length - 1; i += 2) {
  const drink = DRINK_TYPES[i]
}

let stringData: string[] = [];
for (let s: string = 'a'; stringData.length <= 5; s += 'P') {
  stringData.push(s);
}
console.log(stringData);
// [ 'a', 'aP', 'aPP', 'aPPP', 'aPPPP', 'aPPPPP' ]
