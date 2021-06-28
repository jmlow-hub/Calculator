"use strict";

//grab html elements
var equals = document.getElementById("output");
var plusMinus = document.getElementById("plus-minus"); //

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
} //toggle +/- on or off


var handlePlusMinusToggle = plusMinus.addEventListener("click", function (e) {
  if (buttonValuesArr[buttonValuesArr.length - 2] == "-") {
    //if 
    buttonValuesArr.splice(buttonValuesArr.length - 2);
    display.innerHTML = buttonValuesArr.join("");
  }
}); //extract values from array to use in sum

var handleEquals = equals.addEventListener("click", function (e) {
  var newValuesArr = buttonValuesArr.join("");
  var stringOfValues = newValuesArr.toString(); //use reg-ex to extract values before the operator
  //const firstNumber = stringOfValues.match(/[^\+\*\-\/]*/);

  var firstNumber = stringOfValues.match(/^[^\s]*/); //const secondNumber = stringOfValues.match(/[^\+\*\-\/]*$/);

  var secondNumber = stringOfValues.match(/[^\s]*$/); //const operator = stringOfValues.match(/[\+|\*|\-|\/]/);

  var operator = stringOfValues.match(/(?<=\s)[\+|\x|\-|\÷](?=\s)/); //if statement to calculate output based on operator value

  var total = 0;

  if (operator == "+") {
    total = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator == "x" && !newValuesArr.includes("%")) {
    total = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator == "÷") {
    total = parseFloat(firstNumber) / parseFloat(secondNumber);
  } else if (operator == "-") {
    total = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (newValuesArr.includes("%")) {
    total = parseFloat(firstNumber) / 100 * parseFloat(secondNumber);
  }

  ;

  if (Number.isInteger(total)) {
    //evaluates if total contains decimal point. and returns true or false.
    display.innerHTML = total.toFixed(0);
  } else {
    display.innerHTML = total.toFixed(5);
  }
}); //clear button functionality

var clickClear = clear.addEventListener("click", function (e) {
  buttonValuesArr.length = 0; //resets array to 0 length

  display.innerHTML = "";
});