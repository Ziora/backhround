// var h3 = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function displayCurrentGradiant() {
// 	h3.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
// }

// displayCurrentGradiant()

// function setGradient() {
// 	body.style.background = 
// 	`linear-gradient(to right, ${color1.value}, ${color2.value}`;

// 	h3.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

// Function to set the gradient background

setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    h3.textContent = body.style.background + ";";
} 


// Function to generate a random color in hexadecimal format
    getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}


// Function to set random colors
     setRandomColors = () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

// // Set the initial gradient background and input values on page load
//       initialize = () => {
//     // Set initial input colors to match the default gradient in CSS
//     color1.value = "#ff0000"; // Change to the initial color you want
//     color2.value = "#ffff00"; // Change to the initial color you want
//     setGradient();
// }

// Event listeners for color input changes
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// // Initialize on page load
window.addEventListener("load", setGradient);
// window.addEventListener("load", initialize);


// Create and set up the random button
const randomButton = document.createElement("button");
randomButton.textContent = "Generate Random Colors";
randomButton.addEventListener("click", setRandomColors);
document.body.appendChild(randomButton);



// a. So Math.Random():
// Generates a Floating Number between 0 and 1 (e.g 0.12345 or 0.99999)

// b.Multiplying by 16777215:
// the number 16777215(decimal) is equivalent to 0xFFFFFF(hex). its the maximum value you can have 
// for a 24-bit color (RGB = 24 bits)

// c.Math.floor(...): 
// This rounds the random decimal number down to the neareast whole number. 
// (e.g if Math.random() * 16777215 results in 1234567.89, math.floor will convert it to 1234567.)

// d. .toString(16):
// it converts the integer(for example 1234567) into a hexadecimal string. 
// in color context, hexadecimal strings are used to represent colors (e.g #FFFFFF For White)

// e .padStart(6, "0")
// it ensures the Hexadecimal string is always 6 characters long, padding the left side with 
// 0 if its shorter (e.g if .toString(16) gives you abc, padStart(6, "0") will turn into "000abc")

// # adds 1f3ab4 (#1f3ab4)
