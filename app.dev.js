"use strict";

//grab html elements
var one = document.getElementById("1"); //

var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var pAge = document.getElementById("p-age");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var zero = document.getElementById("zero");
var point = document.getElementById("point");
var equals = document.getElementById("output"); //const plusMinus = document.getElementById("plus-minus")//

var clear = document.getElementById("clear");
var buttons = document.querySelectorAll("button");
var display = document.querySelector("p"); //array to hold the values clicked

var displayArr = [];
console.log(buttons[5].value); //set up loop that targets each button, on click pushes the value of the button being iterated over to the array and displays on the "screen"

var _loop = function _loop(i) {
  buttons[i].onclick = function (e) {
    displayArr.push(buttons[i].value);
    display.innerHTML = displayArr;
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}