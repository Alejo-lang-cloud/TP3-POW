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

function agregarNumero(numero) {
    if (numero === '.' && operandoActual.includes('.')) return;
    if (operandoActual === '0' && numero !== '.') {
        operandoActual = numero;
    } else {
        operandoActual += numero; /*Concatenación 5+2 = 52*/ 
    }
    actualizarDisplay();
}

function elegirOperacion(operando) {
    if (operandoActual === '') return;
    if (operandoAnterior !== '') {
        calcular();
    }
    operacion = operando;
    operandoAnterior = operandoActual;
    operandoActual = '';
    actualizarDisplay();
}

