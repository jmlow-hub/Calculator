//grab html elements

const one = document.getElementById("1")//
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const pAge = document.getElementById("p-age")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const subtract = document.getElementById("subtract")
const add = document.getElementById("add")
const zero = document.getElementById("zero")
const point = document.getElementById("point")
const equals = document.getElementById("output");
//const plusMinus = document.getElementById("plus-minus")//
const clear = document.getElementById("clear");

const buttons = document.querySelectorAll("button");

const display = document.querySelector("p");

//array to hold the values clicked
const displayArr = [];

console.log(buttons[5].value);

//set up loop that targets each button, on click pushes the value of the button being iterated over to the array and displays on the "screen"
for(let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = (e) => {
    displayArr.push(buttons[i].value);
    display.innerHTML = displayArr;
  } 

  
}

