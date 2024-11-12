/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 10, 2024
*/


// Generates an anagram of a given string.
// credit to ChatGPT /Wmodes website 
function anagram(inputString) {
    // String to convert/split characters
    const charArrange = inputString.split('');
   
    // Used to shuffle characters/letters (Ref to Wmodes website)
    for (let i = charArrange.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArrange[i], charArrange[j]] = [charArrange[j], charArrange[i]];
    }
   
    // Joining shuffled values back into the string and returning the anagram.
    const anagram = charArrange.join('');

    return anagram;
   }
   
   // given a string, return string in Title Case
   // credit to ChatGPT/Wmodes website
   String.prototype.toTitleCase = function() {
     return this.replace(/\w\S*/g, function(txt) {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
   };
   
   // click listener for button
   $("#submit").click(function(){
       const userName = $("#user-name").val();
       const newName = anagram(userName).toTitleCase();
    

       // Appending new div to output
       $("#output").html('<div class="name-results">' + newName + '</div>');
   });