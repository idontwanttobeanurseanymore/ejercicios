//Funcion que coge elementos de HTML y te devuelve los queryselector
function getEl(selector) {
  return document.querySelector(selector);
}
//const getEl = (selectorClass) => document.querySelector(selectorClass) arrow function???

const btnEl = getEl('.btn') 
const inputText = getEl('.inputText')
// crea btnEl y le asigna document.querySelector('.btn') a través de getEl()
// solo lo muestra al hacer console.log(btnEl) en la consola
// tú puedes usar esa variable más adelante porque ya está "guardada"

btnEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    inputText.innerHTML = "¿funciona?" //FUNCIONAAA
})
