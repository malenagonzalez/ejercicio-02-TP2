const async = require('async');     //waterfall recibe un array de dos funciones por parámetro
async.waterfall([ 
  
  function(callback) { //funcion 1: recibo una función callback por parámetro
    callback('Hola', 'Mundo'); // hago el llamado de esa función callback pasándole los parámetros que va a usar
  },
  
  function(arg1, arg2, callback) { //recibo la segunda función con 3 argumentos, uno de ellos es una función callback
    const greeting = `${arg1} ${arg2}`; //concatena los primeros dos parámetros
    callback(greeting);
  }
], function(result) { //el result es el greeting que le pasaron anteriormente, asi que lo imprime
  console.log(result);
});

// Salida: 'Hola Mundo'


/*En este ejemplo, async.waterfall ejecuta dos funciones en serie, donde la salida de la primera función se pasa 
como entrada a la segunda función. La primera función simplemente llama al callback con dos argumentos, "Hola" y "Mundo". 
La segunda función concatena estos dos argumentos para producir la cadena "Hola Mundo". */

//node .\src\waterfall.js