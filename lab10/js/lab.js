/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 6, 2024
*/

function generateRandonText()   {
const text = ""
}
 const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random()  * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
return text.slice(randStart, randStart, randLen);
}

