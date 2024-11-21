/*
   lab.js - This  JavaScript/jQuery script creates a loop function that prints different words.

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 18, 2024
*/


function fizzbuzz(){
  let fizzle = ""

  for (let i = 0; i <=200; i++) {
    let result = "";

    // operators for multipliers of 3,5,7 along with their multiples
     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
       result += "FizzBuzzBoom";
     } else if (i % 3 === 0 && i % 5 === 0)  {
       result += "FizzBuzz";
    } else if (i % 3 === 0 && i % 7 === 0)  {
       result += "FizzBoom";
    } else if (i % 5 === 0 && i % 7 === 0)  {
       result += "BuzzBoom";
    } else if (i % 3 === 0) {
       result += "Fizz";
    } else if (i % 5 === 0) {
       result += "Buzz";
    } else if (i % 7 === 0) {
       result += "Boom";
   }

   // Appending every result to the output with their original number // Cred: ChatGPT
   fizzle += `<div class="${output}">${i}${result ? ` ${result}` : ""}</div>`;           
  
  }
    //final string 
  $("#output").html(fizzle);
  console.log(fizzle);
}

   //event listener
   $("#button").click(function() {
      fizzbuzz();
});
  

