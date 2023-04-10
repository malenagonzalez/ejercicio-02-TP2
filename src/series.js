async = require('async')

async.series({
  nombre: function (callback) {
    console.log('Cargando datos');
    callback(null, 'Malena Gonzalez');
  },
  legajo: function (callback) {
    console.log('Inscribiendo alumno');
    callback(null, '1234567');
  },
  resultado: function (callback) {
    console.log('Finalizando inscripción');
    callback(null, 'Alumno inscripto');
  }
},
  function (err, results) {
    let text = err === null ? results : err;
    setTimeout(function () {
      console.log(text);
    }, 1000);
  });