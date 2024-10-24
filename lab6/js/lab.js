// index.js - Lab 6: Arrays and Objects
// Author: Andreea Millan
// Date: 10/24/2024

// Define Variables
var myTransport = ["metrobus", " car"];

// Object
var myMainRide = {
  make: "Lexus",
  model: "CrossTrek",
  color: "black",
  year: 2022,
  ownIt: true,
  age: function(){
      return 2024 - this.year
  }
}

// Output
document.writeln("These are my main modes of transportation: " + myTransport + "<br><br>");

document.writeln("My Main Ride: <pre>"),
  JSON.stringify(myMainRide, null, '\t'), "</pre>";

document.writeln("My car is " + myMainRide.age() + "years old.");


