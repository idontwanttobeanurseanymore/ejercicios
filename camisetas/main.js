'use strict';

const tshirtBtn = document.querySelector('.js_tshirtBtn');
const legginsBtn = document.querySelector('.js_legginsBtn');
const totalBox = document.querySelector('.js_totalBox');

let total = 0;

tshirtBtn.addEventListener('click', () => {
  // Código

  total = total + 3000;

  totalBox.innerHTML = total;
});

legginsBtn.addEventListener('click', () => {
  // Código

  total = total + 1500;

  totalBox.innerHTML = total;
});

/*
const nombre = '';

const numeroUnoQueEsEntero = 1;


let numero1 = 1;
let numero2 = 2;

let resultado = numero1+numero2;
console.log(resultado);

numero1 = 10;
numero2 = 20;

resultado = numero1+numero2;
console.log(resultado);
*/