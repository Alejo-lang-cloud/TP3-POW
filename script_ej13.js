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

function calcular() {
    let resultado;
    const anterior = parseFloat(operandoAnterior);
    const actual = parseFloat(operandoActual);

    if (isNaN(anterior) || isNaN(actual)) { /*si no hay numeros, no hacemos nada*/
        return;
    }

    switch (operacion) {
        case '+':
            resultado = anterior+actual;
            break;
        case '-':
            resultado = anterior-actual;
            break;
        case 'x':
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = actual === 0 ? 'Error' : anterior / actual; /*verificamos la division por cero*/ 
            break;
        default:
            return;
    }

    operandoActual = resultado.toString();  /*pasamos a string el resultado y actualizamos el display*/ 
    operacion = null;
    operandoAnterior = '';
    actualizarDisplay(); 
}

