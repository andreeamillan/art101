/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 6, 2024
*/

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 200;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

//event listener for button
$("#make-convo").click(function(){

    //acquiring new fake dialogue
    let newText = generateRandomText();
    console.log("Click");

    let randomNumber = Math.floor(Math.random() * 2) + 1
    
    if (randomNumber == 1) {
        //if condition is true
        $("#output").append('<div class="text"><p>' + newText + '</p></div');

    } else {
    // if condition is false
    $("#output").append('<div class="text2"><p>' + newText + '</p></div>');
    }

    // new div to output div
    setTimeout(() => {
        $('.text').remove();
        $('.text2').remove();
    }, 10000);
}); 

