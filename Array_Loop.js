
// ARRAY ACTIVITY  : //

let myFavoriteSongs = [
    "Down at the cross",
    "Amazing Grace",
    "Only Believe"
];

console.log(myFavoriteSongs);

myFavoriteSongs.pop();

console.log(myFavoriteSongs);

myFavoriteSongs.unshift("Draw Me Nearer");
myFavoriteSongs.unshift("In The Garden");

console.log(myFavoriteSongs); 

let pos = myFavoriteSongs.indexOf('In The Garden');

console.log(pos); 



// LOOP EXAMPLE: //

let favDrinks = [
    "Coke",
    "Dr Pepper",
    "Fanta",
    "Lilt"
];

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i])
}



// While Loop:
let age = 15

while( age < 18 ){
    console.log("You are a child!")
    age++
}
console.log("You are now an adult!")




// LOOP ACTIVITY 1 //
let favFilms = [
    "Fight Club",
    "The Prestige",
    "No Country for Old Men",
    "Moneyball",
    "Superbad"
];
favFilms.push("Snatch");
favFilms.push("Whiplash");

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}



// LOOP ACTIVITY 2 //
const rndInt = Math.floor(Math.random() * 50) + 1
    console.log(rndInt)




// LOOP ACTIVITY 3 //
for(let i=9;i>=0;i--)
{
  console.log(i);
  
}




// LOOP ACTIVITY 4 //
let films = [
    "Fight Club",
    "The Prestige",
    "Snatch",
    "Moneyball"];
for(let i = 0; i < films.length; i++){
    console.log(films[i])
} if (films[2] === "Ghostbusters") {
console.log("Yay it's Ghostbusters!");    
} else {
    console.log("Boo! We want Ghostbusters");
}




// LOOP ACTIVITY 5 //
for (let i = 0; i < 6; i++) {
    let randomNum = (Math.floor(Math.random()*30) + 1);
    if (randomNum % 7 == 0){
        console.log(`${randomNum} is divisible by 7`)
    }else{
        console.log(`${randomNum} is not divisible by 7`)
    }
}    




// LOOP ACTIVITY 6 //
let philsFollowers = [
    "Jo",
    "Beth",
    "Harry",
    "Luke"
]
let bensFollowers = [
    "Jane",
    "Emma",
    "Harry",
    "Luke"
]
for (let i = 0; i < philsFollowers.length; i++) {
    for (let j = 0; j < bensFollowers.length; j++) {
        if(philsFollowers[i]==bensFollowers[j] ){
            console.log(philsFollowers[i], bensFollowers[j])
        }
    }
    
}
