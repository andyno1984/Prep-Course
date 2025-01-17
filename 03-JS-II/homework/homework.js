// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x>y) return x;
    else return y;
    if(x===y) return x;
}

function mayoriaDeEdad(edad) {
  if(edad>=18) return console.log('Allowed');
  else return console.log('Not allowed');
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
  if(status ===1) {return console.log('Online')}
  else if(status===2){return console.log('Away')}
  else if (status !=1 && status !=2) return console.log('Offline');
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var idioma1 = idioma.trim();
 
  switch (idioma1){
    case "aleman":
      console.log("Guten Tag");
      break;
    case "mandarin":
      console.log("Ni Hao");
      break;
    case "ingles":
      console.log("Hello!");
      break;
    default:
      console.log("Hola!");
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var color1 = color.trim();
 
    switch (color1){
      case "blue":
        console.log("This is blue");
        break;
      case "red":
        console.log("This is red");
        break;
      case "green":
        console.log("This is green");
        break;
      case "orange":
        console.log("This is orange");
        break;
      default:
        console.log("Color not found");
    }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero === 10 || numero ===5){
    return console.log(true);
  }
  else return console.log(false);
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20) return console.log(true)
  else return console.log(false);
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === Math.floor(numero)) return console.log(true);
  else return console.log(false);
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero%3 ===0 && numero%5 ===0) return console.log("fizzbuzz");
  else if (numero%5 === 0 ) return console.log("buzz");
  else if (numero%3 === 0) return console.log("fizz");
  else return console.log(numero);
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if(num1>num2 && num1>num3 && num1>0) return console.log("Numero 1 es mayor y positivo");
  else if (num1 <0 || num2<0 || num3<0) return console.log("Hay negativos");
  else if (num3>num1 & num3>num2){
    num3++;
    console.log("Numero 3 es: " + num3);
  }
  else return console.log(false);
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var cont =0;
  if(numero === 0 || numero ===1) return false;
  for(let i=1; i<=numero; i++){
    if(numero%i===0){
      cont++;
    }
  }
  if(cont===2) return console.log(true);
  else return console.log(false);

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor ===true) return console.log("Soy verdadero");
  else return console.log("Soy falso");
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let arreglo=[]
  for(let i=0; i<=60; i++){
    arreglo[i] = 6*i;
  }
  for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
  }
}


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero<0) numero = numero* -1;
  if(numero<1000 && numero>99){
    console.log(true);
  }
  else console.log(false);
}


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i=0;
  do{
    i++;
    numero+=5;
  }while(i<8);
  console.log(numero);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
