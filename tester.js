/* This will prove the JavaScript file is linked */

// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Find the button by its ID
    const myButton = document.getElementById('myButton');

    // Check if the button actually exists
    if (myButton) {
        // Add a 'click' event listener
        myButton.addEventListener('click', () => {
            // Show an alert when the button is clicked
            alert('JavaScript is working!');
        });
    }

    console.log("My script.js file has loaded!");
});
