/*busca en el HTML la primera etiqueta con las clases de los contenedores de display */
const displayAcum = document.querySelector('.contenedor-display-acum');
const displayNumActual = document.querySelector('.contenedor-display-numactual');

let operandoActual = '0'; 
let operandoAnterior = '';
let operacion = null; /*inicialmente*/

function actualizarDisplay() {
    displayNumActual.innerText = operandoActual;
    displayAcum.innerText = operacion ? `${operandoAnterior} ${operacion}` : ''; /*operacion ? evalua si el usuario apretó alguna operacion
    en caso verdadero, concatena con ` ` sino deja en blanco */
}