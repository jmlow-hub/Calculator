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

var buttonValuesArr = []; //set up loop that targets each button, on click pushes the value of the button being iterated over to the button values array

var _loop = function _loop(i) {
  buttons[i].onclick = function (e) {
    buttonValuesArr.push(buttons[i].value); //displays array with commas removed

    display.innerHTML = buttonValuesArr.join("");
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
} //extract values from array to use in sum


var calculateValues = equals.addEventListener("click", function (e) {
  var newValuesArr = buttonValuesArr.join("");
  var stringOfValues = newValuesArr.toString(); //use reg-ex to extract values before the operator

  var firstNumber = stringOfValues.match(/[^\+\*\-\\]*/);
  var secondNumber = stringOfValues.match(/[^\+\*\-\\]*$/);
  var operator = stringOfValues.match(/[\+|\*|\-|\\]/);
  console.log(stringOfValues);
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operator);
});