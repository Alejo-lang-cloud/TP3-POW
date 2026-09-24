// formulario, input y contenedor para alerta
const formCuit = document.getElementById("form-cuit");
const inputNum = document.getElementById("input-cuit");
const alertaResultado = document.getElementById("alerta-resultado");

formCuit.addEventListener("submit", function(event) {
    //evita que la pag se recargue cuando se envia form
    event.preventDefault();

    const valorIngresado = inputNum.value.trim();

    //caso vacio
    if (valorIngresado === "") {
        mostrarAlerta("Por favor, ingrese un número de CUIL o CUIT para continuar.", "alert-danger");
        return;
    }

    //limpiar guiones
    const cuitLimpio = valorIngresado.replace(/-/g, "");

    //cant digitos
    if (cuitLimpio.length !== 11 || isNaN(cuitLimpio)) {
        mostrarAlerta("Error: El formato no es válido. Debe contener 11 dígitos numéricos.", "alert-danger");
        return;
    }

    //funcion modulo 11
    const esValido = validarCuitCuil(cuitLimpio);

    //alerta resultado
    if (esValido) {
        mostrarAlerta("El número de CUIL/CUIT ingresado es <strong>válido</strong>.", "alert-success");
    } else {
        mostrarAlerta("Error: El número de CUIL/CUIT <strong>no es válido</strong> (dígito verificador incorrecto o tipo no admitido).", "alert-danger");
    }
});

function validarCuitCuil(cuitLimpio) {
    const tipo = cuitLimpio.slice(0, 2);
    const tiposValidos = ["20", "23", "24", "27", "30", "33", "34"];
    
    if (!tiposValidos.includes(tipo)) {
        return false;
    }

    //nums a multiplicar de derecha a izq
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let suma = 0;
    
    for (let i = 0; i < 10; i++) {
        suma += parseInt(cuitLimpio[i], 10) * factores[i];
    }

    //mod 11
    const resto = suma % 11;
    let digitoCalculado = 11 - resto;

    if (digitoCalculado === 11) {
        digitoCalculado = 0;
    } else if (digitoCalculado === 10) {
        //10 no es valido
        return false;
    }

    //comparacion con ult digito
    const digitoVerificador = parseInt(cuitLimpio[10], 10);
    return digitoCalculado === digitoVerificador;
}

//aux para alertas resultado o errores
function mostrarAlerta(mensaje, claseBootstrap) {
    alertaResultado.className = `alert mt-4 ${claseBootstrap}`;
    alertaResultado.innerHTML = mensaje;
    alertaResultado.classList.remove("d-none");
}