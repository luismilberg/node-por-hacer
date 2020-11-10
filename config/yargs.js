const descripcion = {
    demand: true,
    alias: 'd'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado / pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', "Crear una tarea por hacer", descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Obtener el listado de las tareas')
    .command('borrar', 'Elimina una tarea del listado', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}