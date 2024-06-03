function calcular(operacion, numUno, numDos) {
  if (operacion == "suma") {
    return numUno + numDos;
  } else if (operacion == "resta") {
    return numUno - numDos;
  } else if (operacion == "multiplicacion") {
    return numUno * numDos;
  } else if (operacion == "divison") {
    return numUno / numDos;
  } else {
    return "Operación no válida";
  }
}

console.log(calcular("suma", 4, 6));
