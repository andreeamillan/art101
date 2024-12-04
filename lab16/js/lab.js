/*
   lab.js 

   Author: Andreea Millan
   Date: December 2nd, 2024
*/

// Using the core $.ajax() method
$(document).ready(function() {
  // Send an AJAX request to retrieve the comic data from the XKCD API
  $.ajax({
    url: 'https://xkcd.com/899/info.0.json',  // XKCD API URL
    method: 'GET',
    success: function(comicObj) {
      console.log('AJAX request successful!');
      console.log('Received comic data:', comicObj);

      // Ensure that the comicObj has the necessary keys before proceeding
      if (comicObj && comicObj.title && comicObj.img && comicObj.alt) {
        // Create a section element for the comic
        var comicSection = $('<section></section>').addClass('comic-section');

        // Set the section title from the comicObj.title
        var comicTitle = $('<h2></h2>').text(comicObj.title);
        comicSection.append(comicTitle);

        // Create an image tag using the comicObj.img and set alt and title attributes
        var comicImage = $('<img>');
        comicImage.attr('src', comicObj.img)       // The URL of the comic image
                  .attr('alt', comicObj.alt)     // Alt text for the image (accessible)
                  .attr('title', comicObj.alt);  // Title text for the image (shown on hover)

        // Append the image to the section
        comicSection.append(comicImage);

        // Append the section to the #comic-container div
        $('#comic-container').html(comicSection);
      } else {
        // Handle case where necessary data is missing in comicObj
        console.error('Comic data is missing required fields!');
        $('#comic-container').html('<p>Failed to load valid comic data. Some required fields are missing.</p>');
      }
    },
    error: function(xhr, status, error) {
      // Handle errors if the AJAX request fails
      console.error('AJAX request failed:', status, error);
      $('#comic-container').html('<p>Failed to load comic data. Please try again later.</p>');
    }
  });
});

  

