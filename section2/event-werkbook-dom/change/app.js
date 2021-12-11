// select our input by ID and assign it to the variable, "input"
let input = document.getElementById("change-me");

// use the add event listener method to put an event on "input"
input.addEventListener("input", (e) => (div.textContent = e.target.value));
// select the div, and change the "textContent" property to the value of the events target (the input box)
let div = document.getElementById("output");
