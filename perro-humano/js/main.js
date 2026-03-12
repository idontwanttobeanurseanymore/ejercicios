'use strict';
const input = document.querySelector('.js_input');
let dogAge = parseInt(input.value)
const btn = document.querySelector('.js_btn');
const result = document.querySelector('.js_result');
let humanAge = parseInt(result.value)

btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    checkAge() // primero llamas la función
    result.innerHTML = `Edad humana: ${humanAge}`
    //con el resultado de la función, cambias el texto
})

function checkAge(){
    if(dogAge = 1){
        humanAge = dogAge + 14
        return humanAge
    }else if(dogAge = 2){
       humanAge = dogAge + 22;
       return humanAge;
    }else if(dogAge >= 3){
        humanAge = 24 + 5 * (dogAge-2)
        return humanAge
    }else{
        return 'No válido'
    }
}
