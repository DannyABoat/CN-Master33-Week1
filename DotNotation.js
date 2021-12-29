
console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("- - - - - - - - - - -");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("- - - - - - - - - - -");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");
// Above code shows how to format a table line by line.


console.table(["Item 1", "Item 2", "Item 3"]);
// Above Code shows how to generate a table containing string values. 


 // This will loop code between here and * 3 times
 for (let i = 0; i<3; i++){
    // This will loop code between here and ** 3 twice
    for(let j = 0; j<2; j++){
      // This will print out twice because of the loop ^
      console.log("    |    |    ")
    }
    // if i is NOT equal to 2 then print the below 
    if (i !== 2){
      console.log("--------------")
    }
  }
  
  console.log(Math.floor(Math.random()*10));
 

//   
console.log("Hello World".endsWith('d'));
console.log("     Hello     World     ".trim());
// Example of Console Logging.

