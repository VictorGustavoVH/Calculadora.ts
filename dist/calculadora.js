"use strict";
let val1;
let val2;
let res;
const txtRes = document.getElementById("res");
function sumar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    txtRes.innerHTML = isNaN(val1) || isNaN(val2)
        ? "Por favor, ingresa ambos valores"
        : (val1 + val2).toString();
}
function restar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    txtRes.innerHTML = isNaN(val1) || isNaN(val2)
        ? "Por favor, ingresa ambos valores"
        : (val1 - val2).toString();
}
function multiplicar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    txtRes.innerHTML = isNaN(val1) || isNaN(val2)
        ? "Por favor, ingresa ambos valores"
        : (val1 * val2).toString();
}
function dividir() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    txtRes.innerHTML = isNaN(val1) || isNaN(val2)
        ? "Por favor, ingresa ambos valores"
        : val2 === 0
            ? "No se puede dividir entre 0"
            : (val1 / val2).toString();
}
