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

// add a click listener to the challenge button
$("button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});


//
$("button-Problems").click(function(){
    $("#Problems").toggleClass("special");
});

//When special mode is off, initiates output
$("#output").text("Special mode is Off");


//
$("#button-results").click(function(){
    $("#results").toggleClass("special");

    if($("results").hasClass("special")) {
       $("#output").text("Special mode is On");
    }
    else {
        $("#output").text("Special mode is Off");
    }
});

