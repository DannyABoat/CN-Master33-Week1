
//------------ [EXAMPLE FUNCTION] ------------//
function greeting(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greeting('John', 'Smith');

//  - When the example function is called it will display a personalized greeting - //




//------------ [EXAMPLE ARROW FUNCTION] ------------//
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(9,1);
console.log(addUp(30,5));
//  - The above example uses parameters (num1 and num2) to return the sum of the 2 numbers, input can be cahanged as parameters are set - //




//------------ [ACTIVITY 1 - FUNCTION TO CHANGE TO ARROW FUNCTION] ------------//
function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
        return (n * factorial(n-1));}
}

console.log(factorial(33));




//------------ [ACTIVITY 1 - UPDATED FUNCTION] ------------//
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//         return (n * factorial(n-1));}
// }

// console.log(factorial(33));




//------------ [ACTIVITY 2 - UPDATED PIZZA ORDERING FUNCTION] ------------//
let orderCount = 0;

const takeOrder = (size, topping1, topping2) => {
    orderCount++;
    console.log(`Order Number: ${orderCount}`)
    console.log(`A ${size} Pizza with ${topping1} and ${topping2}`);
}
takeOrder("14-inch", "Chicken", "Mushroom");
takeOrder("10 inch", "Pepperoni", "Onions");




//------------ [ACTIVITY 3 - CASH MACHINE FUNCTION] ------------//
let accBal = 500;

const withdraw = (accBal, withdrawAmmount, pinNum) => {
    if ((accBal >= withdrawAmmount) && (pinNum == 0000)) {
    console.log(`Transaction approved. Please collect your £${withdrawAmmount}.`);
} else {
    console.log("Transaction Denied");}

}

withdraw(500, 1000, 0000);
