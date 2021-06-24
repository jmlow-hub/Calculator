"use strict";

//grab html elements
var one = document.getElementById("1"); //.value;

var two = document.getElementById("2").value;
var three = document.getElementById("3").value;
var four = document.getElementById("4").value;
var five = document.getElementById("5").value;
var six = document.getElementById("6").value;
var seven = document.getElementById("7").value;
var eight = document.getElementById("8").value;
var nine = document.getElementById("9").value;
var pAge = document.getElementById("p-age").value;
var multiply = document.getElementById("multiply").value;
var divide = document.getElementById("divide").value;
var subtract = document.getElementById("subtract").value;
var add = document.getElementById("add").value;
var zero = document.getElementById("zero").value;
var point = document.getElementById("point").value;
var equals = document.getElementById("output"); //const plusMinus = document.getElementById("plus-minus").value;//

var clear = document.getElementById("clear");
var display = document.querySelector("p");
console.log(display);
var clickDisplay = one.addEventListener("click", function (e) {
  display.innerHTML = one.value;
});