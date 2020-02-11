const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

let data = JSON.stringify(listadoPorHacer);
fs.writeFile('db/data.json', data, (err)=>{
    if (err) { throw new Error('error', err);} 
});
}

const leerDB = () => {
    /*
    fs.readFile('db/data,joson', data, (data, err)=>{
        if (err){
            { throw new Error('error', err);} 
        }
        return data
    }) */

    try{
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }
    
}


const  crear = (descripcion) =>{
    let porHacer = {
        descripcion,
        completado: false
    }
    leerDB();
    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

const listar = () => {

    leerDB();
    return listadoPorHacer; 
}

const actualizar = ( descripcion, completado = true) => {
    leerDB();

    let index = listadoPorHacer.findIndex((tarea)=>{
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true
    }else{
        return false
    }

}

const borrar = (descripcion) => {
    console.log(descripcion);
    leerDB();
    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    })
if (index >=0 ) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
}
else{
    return false
}



}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}