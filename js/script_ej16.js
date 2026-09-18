const input_num = document.getElementById("input-cuit");
const numero = input_num.value;


function validarCuitCuil(numero) {
const tipo = numero.slice(0,2);
const tiposValidos = ["20", "23", "24", "27", "30", "33", "34"];
if (!tiposValidos.includes(tipo)) {
    return false;
}
//numeros a multiplicar de derecha a izq
const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
let suma = 0;
for (let i = 0; i < 10; i++) {
        suma += parseInt(cuitLimpio[i], 10) * factores[i];
    }

    //hacemos el modulo 11
    const resto = suma % 11;
    let digitoCalculado = 11 - resto;

    if (digitoCalculado === 11) {
        digitoCalculado = 0;
    } else if (digitoCalculado === 10) {
        // 10 no es valido para ese CUIT
        return false;
    }

    // comparar con el último dígito ingresado
    const digitoVerificador = parseInt(cuitLimpio[10], 10);
    return digitoCalculado === digitoVerificador;
}
