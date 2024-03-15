//const MY_NAME: string="Rene";
let mymilkAmount: number=50;
let mycoffeName: string="Cappuchino";
//console.log(`My name is:${MY_NAME}! Your coffe is ${mycoffeName} and it has ${mymilkAmount} ml of milk in it`);

if(isTooMuchMilk1(40)){
    console.log('result1');
}else if(mycoffeName==="Test"){
    console.log('result2');
}else{
    console.log("result3");
}

function isTooMuchMilk1(amount:number):boolean{
    return mymilkAmount>amount;
}
