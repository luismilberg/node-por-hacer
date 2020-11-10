const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando ){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
       
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('====== POR HACER ======'.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado realizada: ${tarea.completado}`);
            console.log('======================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if( actualizado ) {
            console.log(`La tarea [ ${argv.descripcion} ] fue actualizada`);
        } else {
            console.log(`La tarea [ ${argv.descripcion} ] NO fue actualizada`);
        }
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log( borrar );
        break;
         
    default:
        console.log(`El comando [ ${comando} ] no es un comando válido`);

}