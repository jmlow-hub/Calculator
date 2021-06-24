//grab html elements

const one = document.getElementById("1")//.value;
const two = document.getElementById("2").value;
const three = document.getElementById("3").value;
const four = document.getElementById("4").value;
const five = document.getElementById("5").value;
const six = document.getElementById("6").value;
const seven = document.getElementById("7").value;
const eight = document.getElementById("8").value;
const nine = document.getElementById("9").value;
const pAge = document.getElementById("p-age").value;
const multiply = document.getElementById("multiply").value;
const divide = document.getElementById("divide").value;
const subtract = document.getElementById("subtract").value;
const add = document.getElementById("add").value;
const zero = document.getElementById("zero").value;
const point = document.getElementById("point").value;
const equals = document.getElementById("output");
//const plusMinus = document.getElementById("plus-minus").value;//
const clear = document.getElementById("clear");

const display = document.querySelector("p");
console.log(display);

const clickDisplay = one.addEventListener("click", (e) => {
    display.innerHTML = one.value;
})