// No cambies los nombres de las funciones.


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  console.log(array[0]);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var indice = array.length-1;
  console.log(array[indice]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var longitud = array.length;
  console.log("Longitud del Array: " + longitud);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<array.length; i++){
    array[i] = array[i]+1;
  }
  console.log(array);
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  console.log(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  console.log(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena="";
  for(let i=0; i<palabras.length; i++){
    cadena = cadena + palabras[i] + " "
  }
  console.log(cadena);
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var valor = false;
  for(let i=0; i<array.length;i++){
    if(array[i]===elemento){
      valor = true;
      continue;
    }
  }
  console.log(valor);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor=0;
  for(let i=0; i<array.length; i++){
    valor = valor + array[i];
  }
  console.log("La suma de los valores del arreglo es: " + valor);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  for(let i=0; i<array.length; i++){
    promedio = promedio + array[i];
  }
  console.log(promedio/array.length);
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=array[0];
  for(let i=1; i<array.length; i++){
    if(array[i] > mayor) mayor = array[i];
  }
  console.log("El numero mayor del arreglo es: " + mayor);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1
  for(let i=0; i<arguments.length; i++){
   producto = producto * arguments[i];
  }
  console.log("El producto del arguments es: " + producto);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
      case 1:
          console.log("Domingo: Es fin de semana");
          break;
      case 2:
          console.log("Lunes: Es dia laboral");
          break;
      case 3:
          console.log("Martes: Es dia laboral");
          break;
      case 4:
          console.log("Miercoles: Es dia laboral");
          break;
      case 5:
          console.log("Jueves: Es dia laboral");
          break;
      case 6:
          console.log("Viernes: Es dia laboral");
          break;
      case 7:
          console.log("Sabado: Es fin de semana");
          break;
      default: console.log("No corresponde a ningun dia de la semana!!!");
  }
} 



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = Math.trunc(n);
  for(let i=0; n>10; i=i+10){
      n = Math.trunc(n/10);
  }
  if(n===9) return console.log(true);
  else return console.log(false);    
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var valor = true;
  for(let i=0; i<arreglo.length-1; i++){
      if(arreglo[i] != arreglo[i+1]){
          valor =  false;
          continue;
      }
  }
  console.log(valor);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const array1 = ["hola"];
  
  for(let i=0; i<array.length; i++){
      if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){            
          array1.push(array[i]);
      }
  }
  if (array1.length ===3) console.log("Elementos del arreglo: " + array1);
  else console.log("No se encontraron los meses pedidos");

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arreglo = [];
  for(var i=0; i<array.length; i++){
      if(array[i] > 100){
          arreglo.push(array[i]);
      }
  }
  console.log(arreglo);
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const array = [];
  for(let i=0; i<10; i++){
      numero = numero + 2;
      array.push(numero);
      if(numero === i) {
          console.log("Se interrumpio la ejecucion");
          break;
      }
      
  }
  console.log(array);
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const array = [];
  for(let i=0; i<10; i++){
      if(i===5) {
         continue;;
      }
    numero = numero + 2;
    array.push(numero);
  }  
  console.log(array);    
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
