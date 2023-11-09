/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

function tipoDeLetras(texto){
   //for(let texto = 0; texto < cadenaTexto.length; texto++){
     if(texto === texto.toLowerCase()){
       document.write(`<h2>En el texto "${texto}", todas las letras son minúsculas</h2>`)
    // }
   } else if(texto === texto.toUpperCase()){
      document.write(`<h2>En el texto "${texto}", todas las letras son mayúsculas</h2>`)
   } else{
      document.write(`<h2>En el texto "${texto}", hay letras mayúsculas y minúsculas</h2>`)
   }
 }
 
 const cadenatexto = prompt('Ingrese un texto');
 tipoDeLetras(cadenatexto);
