/**
 * Author: Andreea Millan
 * Created: October 28, 2024
 * Purpose: To sort / rearrange the user's name.
 * 
 */

// sortUsername - function created to take user input through a browser/window prompt and rearrange the letters of their name.

// declaring function and function variables
function sortUsername() {
    const userName = window.prompt("Hello! Tell me your name so I can fix it and make it better.");
    console.log("userName =", userName); 

    // declaring other part of function, using code shortcut
    var nameSorted = userName.toUpperCase().split("").sort().join("");
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// Only call the function once and store the result
const sortedName = sortUsername();

// Output the result in the document
document.write("User's correct and better name is: " + sortedName + "</br>");