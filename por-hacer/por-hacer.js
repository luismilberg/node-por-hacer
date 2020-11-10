const fs = require('fs');

let listadoPorHacer = [];

const getListado = () => {
    cargarDB();
    return listadoPorHacer; 
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('./db/data.json', data, (err) => {
        if(err){
            throw new Error(err);
        }
    })

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    
}

const crear = (descripcion) => {

    cargarDB();
    //Carga el arreglo en listadoPorHacer

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //Carga el arreglo en listadoPorHacer
    
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if(index >= 0){
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}