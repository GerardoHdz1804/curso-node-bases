const { demandOption } = require('yargs');

const yargs = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type:'number',
                        demandOption: true,
                        description:'Es la base para la tabla de multiplicar'
                    }).check((yargs, options) => {
                        if(isNaN(yargs.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    }).option('l',{
                        alias: 'listar',
                        type:'boolean',
                        default: false,
                        demandOption: true,
                        description:'Comando para saber si quiero o no mostrar la tabla en consola'
                    }).option('h',{
                        alias:'hasta',
                        type:'number',
                        demandOption: true,
                        default: 10
                    }).argv;

module.exports = yargs;