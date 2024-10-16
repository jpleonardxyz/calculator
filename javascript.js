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