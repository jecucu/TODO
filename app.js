const color = require('colors');
const todo = require('./todo/todo.js');
const {argv} = require('./config/yargs.js')

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = todo.crear(argv.descripcion)
        console.log(tarea);
        console.log(`Se agrego la tarea ${tarea.descripcion}`);
        break;
    case 'listar':
        let lista = todo.listar();
        for(let tarea of lista){
            console.log('======== Por Hacer ========='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`estado: ${tarea.completado}`);
            console.log('============================'.green);
        }

        break;
    case 'actualizar':
        let actualizar = todo.actualizar(argv.descripcion, argv.completado);
            console.log(actualizar);
            break;
    case 'borrar':
                    
        let borrar = todo.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
        break;
}

