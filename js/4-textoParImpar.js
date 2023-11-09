/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */

function NumeroParImpar(numero) {
  if (numero % 2 === 0) {
    document.write(`El numero ${numero} es "Par"`);
  } else {
    document.write(`EL numero ${numero} es "Impar"`);
  }
}

const numero = parseInt(prompt("ingrese un numero"));
NumeroParImpar(numero);
