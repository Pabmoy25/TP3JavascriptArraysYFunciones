/* 2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'. */

const listaDeCiudades = [
  "Nueva York, Estados Unidos",
  "Barcelona, España",
  "Tokio, Japon",
  "Londres, Reino Unido",
  "Roma, Italia",
  "Pekin, China",
  "Río de Janeiro, Brasil",
  "Amsterdan, Paises Bajos",
  "Sídney,Australia",
  "El Cairo, Egipto",
];

do {
  const ciudad = prompt("Ingrese una ciudad y su país");
  if (isNaN(ciudad)) {
    listaDeCiudades.push(ciudad);
  } else {
    alert(`Ingrese un texto valido`);
  }
} while (confirm("Ingresar una nueva ciudad o Cancelar para ver la lista"));

document.write(`<h2>Lista de Ciudades</h2>`);
document.write(`<ul>`);
for (let i = 0; i < listaDeCiudades.length; i++) {
  document.write(`<li>${listaDeCiudades[i]}</li>`);
}
document.write(`</ul>`);

document.write("<hr>");

document.write(
  `<h2>La longitud del arreglo es: ${listaDeCiudades.length}</h2>`
);

document.write("<hr>");

//posiciones 1,3,ultima
document.write(`<h2>Posiciones 1, 3 y 5</h2>`);
document.write(`<ul>`);
document.write(
  `<li>El elemento de la 1era posicion es ${listaDeCiudades[0]}</li>`
);
document.write(
  `<li>El elemento de la 3era posicion es ${listaDeCiudades[2]}</li>`
);
document.write(
  `<li>El elemento de la ultima posicion es ${listaDeCiudades[9]}</li>`
);
document.write(`</ul>`);

document.write("<hr>");

//Elemento de la segunda posicion
document.write(
  `<h2>El elemento de la 2da posicion es ${listaDeCiudades[1]}</h2>`
);

document.write("<hr>");

//Reemplazar posicion 2 por Barcelona
listaDeCiudades.splice(1, 1, "Barcelona");
document.write(
  `<h2>Lista de Ciudades (reemplazando posicion 2 por Barcelona)</h2>`
);
listaDeCiudades.splice(1, 1, "Barcelona");
for (let i = 0; i < listaDeCiudades.length; i++) {
  document.write(`<li>${listaDeCiudades[i]}</li>`);
}
document.write("<hr>");

// Añadir Paris a la ultima Posicion
listaDeCiudades.push("Paris, Francia");
document.write(`<h2>Añadir a la ultima posición Paris</h2>`);
listaDeCiudades.splice(1, 1, "Barcelona");
for (let i = 0; i < listaDeCiudades.length; i++) {
  document.write(`<li>${listaDeCiudades[i]}</li>`);
}
