/*
// index.js - Lab 8: Anon Functions and Callbacks
// Author: Andreea Millan
// Date: 10/30/2024
*/

function sumNumbers(x){
  return x * x;
}

// adding inputs and testing function
console.log ("What's our first input? ", sumNumbers(1));
console.log ("What's our second input? ", sumNumbers(2));

array = [100, 20, 18, 142, 70, 20000]
console.log("My array", array);

var result = array.map(sumNumbers);
// displaying return
console.log("Combine numbers:", result);

var result = array.map(function(x){
  return x + 100;
})
// console log should return [200, 120, 118, 242, 170, 20100]
console.log("Arrays with an added value:", result);

var mapResults = "Map results";
console.log("Results ", mapResults);

$("#output").html(mapResults); string
