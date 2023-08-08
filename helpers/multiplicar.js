const fs = require('fs');
const colors = require('colors');
const nombreArchivo = '';

const crearArchivo = async( base = 6, listar = false, hasta = 10 )=>{
    try {
        let salida = '';
    
        for (let i = 1; i <= hasta ; i++) {
            salida += ` ${base} x ${i} = ${base*i} \n`;
        }

        if( listar ) {
            console.log( '================'.blue.bold );
            console.log( '  Tabla del '.rainbow, base );
            console.log( '================'.blue.bold );
            console.log( salida.bold ); 
        }

        fs.writeFileSync(`./salidas/Tabla-${ base }.txt `, salida );

        return ` tabla-${base}.txt `;

    } catch (error) {
        throw error;
    }
}

module.exports={
    crearArchivo
}