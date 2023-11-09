/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
*/


const ladoA = parseFloat(prompt('Ingrese el valor de Lado A'));
const ladoB = parseFloat(prompt('Ingrese el valor de Lado B'));

function perimetro(ladoA,ladoB){
 const formulaDePerimetro =  2 * (ladoA + ladoB);
 document.write(`<h2>El resultado del Perímetro es ${formulaDePerimetro}</h2>`)
}

perimetro(ladoA,ladoB);