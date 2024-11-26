/*
   lab.js 

   Requirements: jQuery must be loaded for this script to work.

   Author: Andreea Millan
   Date: November 25, 2024
*/

// Using the core $.ajax() method
function fetchPokemonAPI() {
   $.ajax({
      // The URL for the request (from the API docs)
      url: "https://pokeapi.co/api/v2/pokemon/eevee/",
      // The type of request (GET is used here)
      type: "GET",
      // The type of data we expect back
      dataType: "json",
      
      // What to do when the API call is successful
      success: function(data) {
         // Log the response data (the information about Eevee)
         console.log(data);
      },
      
      // What to do if the API call fails
      error: function (jqXHR, textStatus, errorThrown) { 
         // Log the error message
         console.log("Error:", textStatus, errorThrown);
      }
   });
}

// Trigger the fetchPokemonAPI function when the button with id 'activate' is clicked
$("#activate").click(function() {
   fetchPokemonAPI();
});



  

