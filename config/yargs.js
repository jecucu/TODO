const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}


const argv = require('yargs')
.command('crear', 'crear tarea', {descripcion})
.command('listar', 'Listar tareas', {})
.command('actualizar', 'actualiza el estado de la tarea', {descripcion, completado})
.command('borrar', 'borra una tarea', {descripcion: {
    demand: true,
    alias: 'd'
}})
.help()
.argv;

module.exports = {
    argv
};