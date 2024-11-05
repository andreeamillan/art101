/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 4, 2024
*/

//Creating the buttons 
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// click listener for challenge button
$("button-challenge").click(function(){
    // add/subtract "special" class to section
    $("#challenge").toggleClass("special");
});

//button for problem section
$("#Problems").append("<button id='button-problems'>Make Special</button>");

//click listener for problems button 
$("button-Problems").click(function(){
    //add / subtract special class to section
    $("#problems").toggleClass("special");
});

//button for results section
$("#results").append("<button id='button-results'>Make Special</button>");

// clicl listener to results button
$("button-results").click(function(){
    // add/substract the special class to section
    $("#results").toggleClass("special");

    if ($("#results").hasClass("special")) {
        $("#output").text("Special mode is ON");
    }
    else {
        $("#output").text("Special mode is OFF");
    }
});
