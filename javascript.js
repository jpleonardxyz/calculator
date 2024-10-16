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
        console.log("displayValue " + displayValue);
        display.textContent = displayValue;
    });
});

//obtain reference to operator buttons
const opButtons = document.querySelectorAll(".operation");

//add event to operation button
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayValue === '' ? operand1=0: operand1 = parseInt(displayValue);
        console.log("operand1 " + operand1)
        operator = button.textContent;
        displayValue = '';
        console.log("operand1 after operation press " + operand1);
    })
});

//obtain reference and set logic for equals button
const equals = document.querySelector('#equals');

equals.addEventListener('click', ()=> {
    displayValue === '' ? operand2=0: operand2 = parseInt(displayValue);
    let result = operate(operand1, operand2, operator);
    console.log("operand1 " + operand1);
    console.log("operand2 " + operand2);
    console.log(result);
    displayValue = result;
    display.textContent = result;
    operand1 = result;
});

//obtain refernece and set logic for clear button
const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click', ()=>{
    operand1 = 0;
    operand2 = 0;
    operator = '';
    displayValue = '';
    display.textContent = '0';
})


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