let buttons = document.getElementsByClassName('button');
let numButtons = document.getElementsByClassName('num-btn');
let opeButtons = document.getElementsByClassName('ope-btn');
let clearButtons = document.getElementById('clear-btn');
let equalButtons = document.getElementById('equ-btn');
let screen = document.querySelector('.screen');

 for (let i=0; i<numButtons.length; i++) {
     numButtons[i].addEventListener('click', function() {
        screen.value += this.value
         console.log(this.value);
     });
 }

 for (let j=0; j < opeButtons.length; j++) {
    opeButtons[j].addEventListener('click', function() {
        screen.value += this.value
    });
 }

 equalButtons.addEventListener('click', function(){
     let result = eval(screen.value);
     screen.value = result;
 })

clearButtons.addEventListener('click', function() {
    screen.value = ''
})