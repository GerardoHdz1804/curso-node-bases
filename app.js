const fs = require('fs');
const {crearArchivo} = require('./helper-codes/multiplicar');
const yargs = require('./config/yargs');



console.clear();

crearArchivo(yargs.b, yargs.l, yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


