//store variables for the parts of the calculation
let operand1 = 0;
let operand2 = 0;
let operator = '';

//store variable for display
let displayValue = "";

//obtain references to number buttons
const numButtons = document.querySelectorAll(".number");

//obtain refernce to display
const display = document.querySelector(".display");

//let number buttons modify display
numButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayValue += button.textContent;
        display.textContent = displayValue;
    });
});

//obtain reference to operator buttons
const opButtons = document.querySelectorAll(".operation");

//add event to operation button
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayValue === '' ? operand1=0: operand1 = parseInt(displayValue);
        operator = button.textContent;
    })
});




function operate(num1, num2, op){
    //call appropriate operation function based on input operation
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            break;
    }
}


function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if (num2 === 0){
        //prevent division by 0
        return "invalid";
    }
    else{
        //prevent overflow
        return Math.round(num1/num2 * 100)/100;
    }
}