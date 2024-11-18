/*
   lab.js - This  JavaScript/jQuery script creates a sorting hat based on user input and button implementation.

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 14, 2024
*/


// Return Gryffindor, Ravenclaw, Slytherin, Hufflepugg
// depends on length mod 4
function sortingHat(str)  {
  len = str.length;
  mod = len % 4;
  if (mod ==0)  {
    return "Gryffindor"
  }
  else if (mod==1)  {
    return "Ravenclaw"
  }
  else if (mod==2)  {
    return "Slytherin"
  }
  else if (mod==3)  {
    return "Hufflepuff"
  }
}

//creating button / click listener 
$("#button").click(function(){
  let name = $("#input").val();
  console.log(name);

  let house = sortingHat(name);
  console.log(house);

  $("#output").html("<h1>" + house + "</h1>");
});


  

