// Get the input element and output element by their IDs
let inputElement = document.querySelector("#inputcel");
let outputElement = document.getElementById("answer");

// Function to calculate and update Fahrenheit based on input value
function updateFahrenheit() {
    let celsius = parseFloat(inputElement.value);
    let fahrenheit = celsius * (9/5) + 32;
    outputElement.innerHTML = fahrenheit;
}

// Add an event listener to the input element
inputElement.addEventListener("input", updateFahrenheit);

// Call the function initially to handle the default input value
updateFahrenheit();
