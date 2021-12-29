
// Activity 1:
 let myName = "Christian";
 let myAge = 29; 
 
 console.log(myName);
 console.log(myAge);
 // Above code shows how to set variables and display the variable values on the console log.


 

// let name = 'Hope';
// let age = 32;
// let favColor = 'Blue';

// console.log(`My name is ${name}, I am ${age} years of age and I like ${favColor} as a color.`);

// name = 'Dave';
// age = 30;
// favColor = 'Green';

// console.log(`My name is ${name}, I am ${age} years of age and I like ${favColor} as a color.`);



// Activity 2:
let breakfast = 'Oats'
let lunch = 'Pizza'
let dinner = 'Rice'

console.log(`I am having ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} as my dinner`);

breakfast = 'chocolate drink';
lunch = 'Potatoes';
dinner = 'Chicken salad';

console.log(`However, my meals for tomorrow will be ${breakfast}, ${lunch}, and ${dinner} respectively.`);



// Activity 3:
let start = new Date("November 10, 1984"),
    end = new Date(),
    diff = 0,
    days = 1000 * 60 * 60 *24; // Dividing it by milliseconds, sec, min, hrs

diff = end - start;
console.log(Math.floor(diff / days) + "days have passed since I was born.");



// Activity 3 Again
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("1984,11,10")
const todaysDate = new Date("2021, 12, 16");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);



// Activity 4 - Expected Answer
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);




// ^ Activity 5 ^
let age = 20;
let country = "UK";
if (age > 17 && country == "UK"){
   console.log("Yes I can serve you.");
} else {
   console.log("You aren't old enough.");
}



