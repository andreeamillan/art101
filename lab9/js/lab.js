/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 4, 2024
*/

//Creating the buttons 
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// toggle class special for challenge button
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});


//click function for result button 
$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});


$("#output").text("Special mode is OFF");

// click listener to results button
$("#button-results").click(function() {
    $("#results").toggleClass("special");

    if ($("#results").hasClass("special")) {
        $("#output").text("Special mode is ON");
    }
    else {
        $("#output").text("Special mode is OFF");
    }
});
