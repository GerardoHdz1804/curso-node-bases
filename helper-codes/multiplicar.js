const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{
        let salida = '';
        
        for (let index = 0; index < hasta; index++) {
            salida += `${base} x ${index+1} = ${base*(index+1)}\n`; 
        }
        
        if(listar){console.log(salida);}
        
        archivo = fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
        
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}