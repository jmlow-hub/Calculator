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

//toggle +/- on or off
const handlePlusMinusToggle = plusMinus.addEventListener("click", (e) => {
  if (buttonValuesArr[buttonValuesArr.length-2] == "-") {
    buttonValuesArr.splice(buttonValuesArr.length-2);
    display.innerHTML = buttonValuesArr.join("");
  }
  }
 )


//function to perform calculation - extractw values from array to use in the sum
  const handleEquals = equals.addEventListener("click", (e) => {
    const newValuesArr = buttonValuesArr.join("");
    const stringOfValues = newValuesArr.toString();

  //use reg-ex to extract values before the operator  
    const firstNumber = stringOfValues.match(/^[^\s]*/);
 
    const secondNumber = stringOfValues.match(/[^\s]*$/);

  //const operator = stringOfValues.match(/[\+|\*|\-|\/]/);
    const operator = stringOfValues.match(/(?<=\s)[\+|\x|\-|\÷](?=\s)/);

   
    //if statement to calculate output based on operator value
    let total = 0;
    if (operator == "+") {
    total = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator == "x" && !newValuesArr.includes("%")) {
    total = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator == "÷") {
    total = parseFloat(firstNumber) / parseFloat(secondNumber);
  } else if (operator == "-") {
    total = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (newValuesArr.includes("%")) {
    total = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber);
  } ;
  
  
    if (Number.isInteger(total)) { //evaluates if total contains decimal point. and returns true or false.
    display.innerHTML = total.toFixed(0);
  } else {
    display.innerHTML = total.toFixed(5);
  }
  
  })


//clear button functionality
    const handleClear = clear.addEventListener("click", (e) => {
    
    buttonValuesArr.length = 0;//resets array to 0 length
    display.innerHTML = "";

})


  




