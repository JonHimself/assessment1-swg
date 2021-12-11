// app.js submit directory event-werkbook
// **UPDATE**
// use the JS DOM manipulation to add a new input to your form with its own id attribute
let form = document.querySelector("form");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let newInput = document.createElement("input");
let newDiv = document.createElement("div");
let button = document.querySelector("button");

newInput.setAttribute("id", "eye-color");
newDiv.setAttribute("id", "form-data");

ageInput.insertAdjacentElement("afterend", newInput);
form.insertAdjacentElement("afterend", newDiv);

button.addEventListener("click", (e) => {
  e.preventDefault();
  newDiv.textContent = `name: ${nameInput.value} age: ${ageInput.value} eyecolor: ${newInput.value}`;
});
// upon clicking the submit button have the from data show up on the page (new element create and add to DOM)
// make sure this process canbe repeated many times
