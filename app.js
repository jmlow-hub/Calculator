//grab html elements

const equals = document.getElementById("output");
const plusMinus = document.getElementById("plus-minus")//
const clear = document.getElementById("clear");

const buttons = document.querySelectorAll("button");

const display = document.querySelector("p");

//array to hold the values clicked
const buttonValuesArr = [];


//set up loop that targets each button, on click pushes the value of the button being iterated over to the button values array
for(let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = (e) => {
    buttonValuesArr.push(buttons[i].value);
    //displays array with commas removed
    display.innerHTML = buttonValuesArr.join("");
  } 
}

//extract values from array to use in sum
const calculateValues = equals.addEventListener("click", (e) => {
  const newValuesArr = buttonValuesArr.join("");
  const stringOfValues = newValuesArr.toString();
  //use reg-ex to extract values before the operator
  
  const firstNumber = stringOfValues.match(/[^\+\*\-\/]*/);
  const secondNumber = stringOfValues.match(/[^\+\*\-\/]*$/);
  const operator = stringOfValues.match(/[\+|\*|\-|\/]/);
  const pAge = stringOfValues.match(/%/);

    
    //if statement to calculate output based on operator value
  let total = 0;
   
  if (operator == "+") {
    total = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator == "*" && pAge != "%") {
    total = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator == "/") {
    total = parseFloat(firstNumber) / parseFloat(secondNumber);
  } else if (operator == "-") {
    total = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (newValuesArr.includes("%")) {
    total = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber);
  }
    
  
  if (Number.isInteger(total)) {
    display.innerHTML = total.toFixed(0);
  } else {
    display.innerHTML = total.toFixed(5);
  }

  })




//clear button functionality
 const clickClear = clear.addEventListener("click", (e) => {
 
  buttonValuesArr.length = 0;//resets array to 0 length
  display.innerHTML = "";

})


  




