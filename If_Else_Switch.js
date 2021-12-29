
 // ^ Activity 1  - If and Else^
 let topping = "Olives" ;
 switch(topping){
     case "Chicken":
     case "Mushroom":
         console.log("These are important ingredients for my pizza.");
         break;
         case "Pepperoni":
            case "Onions":
                console.log(`I dont mind having ${topping} on my pizza.`);
                break;     
                case "Pineapple":
                    case "Olives":
                        console.log(`${topping} should not be on a pizza.`);           
 }



 // ^ Activity 2  - If and Else^
let password = "12345678";
if (password.length < 8){
    console.log("Password not long enough");
} else {
    console.log(password);
}


// let num = 15;
// if (num % 3 === 0 || num % 5 === 0){
//     console.log("This number is divisible by 3 or 5");
// } else {
//     console.log("This number is not divisible by 3 or 5");
// }




// ^ Activity 3 - If and Else^
let num = 15;
if (num % 3 === 0 && num % 5 === 0){
    console.log("BuzzFizz");}
    else if (num % 5 === 0){
    console.log("Buzz");
}
    else if (num % 3 === 0){
    console.log("Fizz");
} else {
    console.log("This number is not divisible by 3 or 5");
}




// ^ Activity 4 - If and Else^
let time = 6 ;
let placeOfWork = "I'm at work";
let townOfHome = "Commuting to work";
let home = "I'm at home";

if (time === 9 || time === 10 || time === 11 || time === 12 | time === 1 || time === 2 || time === 3 || time === 4 || time === 5){
    console.log(placeOfWork);}
    else if (time === 8){
    console.log(townOfHome);
}
 else {
    console.log(home);
}




// ^ Activity 6 - If and Else^
function endVowel(x){
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
 }
 
 console.log(endVowel('“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'));