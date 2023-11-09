/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario. */

const numero = parseInt(prompt("Tabla de multiplicar del:"));

function tablaDeMultiplicar(numero) {
    if (!isNaN(numero)) {
        document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`)
        for(let i = 1 ;i <=10; i++){
        let resultado =  numero * i
            document.write(`${numero}  x ${i} = ${resultado}`)
            document.write(`<br>`)
          }
        }else {alert(`No ingresó un número válido`);
        } 
    }
    tablaDeMultiplicar(numero);
