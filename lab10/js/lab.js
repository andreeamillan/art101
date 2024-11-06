/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 6, 2024
*/

//function for generating fake dialogue
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random()  * (max - min + 1)) + min;
// Random starting index to slice the text input
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart, randLen);
}

//event listener for button
$("#make-convo").click(function(){
});

//acquiring new fake dialogue
const newText = generateRandomText();

//appending new div to our output div
$("#output").append('<div class ="text"><p>' + newText + '</p></div>');
