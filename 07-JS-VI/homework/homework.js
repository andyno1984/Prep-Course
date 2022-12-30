// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  console.log(nombre);
}

mayuscula('mario');

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function saludar(){
  console.log("Hola mundo");
}

invocarCallback(saludar);

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
}

function sumar(n1,n2){
  console.log('La suma es: ' + (n1+n2));
}

operacionMatematica(5,10,sumar);

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  return cb(numeros);
}

var numeros = [1,2,3,4,5,6,7,8,9,10];
function sumarArreglo(numeros){
  var suma = numeros.reduce(function(acum,elemento){
      return acum + elemento;
  })
  console.log(suma);
}

sumarArray(numeros, sumarArreglo);

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  return array.forEach(cb);
}

var nombres = ['Carlos', 'Maria', 'Ana', 'Tatiana'];

function mostrando(elemento){
  console.log(elemento);
}

  forEach(nombres, mostrando);


function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:
     const arr1 = array.map(mostrando);
     console.log(arr1);
     return arr1;
  }

  var nombres = ['Carlos', 'Maria', 'Ana', 'Tatiana'];

  function mostrando(elemento){
    return elemento;
  }

    map(nombres, mostrando);

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
