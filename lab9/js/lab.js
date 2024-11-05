/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 4, 2024
*/

//Creating the buttons 
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#Problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click function for toggling class special on the challenge button
$("button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});


// click function added to toggle class special for result
$("button-Problems").click(function() {
    $("#Problems").toggleClass("special");
});

//When special mode is off, initiates output
$("#output").text("Special mode is OFF");

// click function to toggle class special for results + displays special mode for on/off
$("#button-results").click(function() {
    $("#results").toggleClass("special");

    if ($("results").hasClass("special")) {
        $("#output").text("Special mode is ON");
    }
    else {
        $("#output").text("Special mode is OFF");
    }
});

