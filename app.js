
const { alias, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log( colors.bgGreen.bold.white( nombreArchivo,'creado' ) ) )
    .catch( err => console.log(err) );


