let num1;
let num2;
const addKey =  document.querySelector('#add-key');

function addition(array){
    return array.reduce((num1, num2) => num1 + num2, 0);
}

function substraction (array){
    return array.reduce((num1, num2) => num1 - num2, 0);
}

function multiplication (array){
    return array.reduce((num1, num2) => num1 * num2, 0);
}

function division (array){
    return array.reduce((num1, num2) => num1/num2, 0);
}

function operate (operator) {
    
}