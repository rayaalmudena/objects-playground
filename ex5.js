/**
 * Buscando a Nemo
 */

let pez1 = {
    nombre: "Dory",
    color: 'azul'

}

let pez2 = {
    nombre: "Nemo",
    color: 'naranja'
}

let pez3 = {
    nombre: "Sipho",
    color: 'negro'
}

/**
 * Disponemos de un array de 3 objetos. Concretamente, son 3 peces.
 * Queremos implementar una función que nos diga si cierto pez está en el array.
 * 
 * 1. ¿Cómo debemos actualizar la variable pezEncontrado a cada iteración del bucle?
 * 2. ¿Cómo debemos actualizar la variale 'indicePez' a cada iteración del bucle?
 * 
 * Ayudate de chivatos y del depurador de visual Studio para ver que sucede dentro del bucle a cada iteración
 */

let banco_peces = [pez1, pez2, pez3]

function buscarPez(banco_peces, pezBuscado) {
    let pezEncontrado = false
    let indicePez = 0
   
    while(!pezEncontrado && indicePez<banco_peces.length){
    
        let pez=banco_peces[indicePez].nombre;        
        if(pez==pezBuscado){
            pezEncontrado=true;
        }
        indicePez++;
    }
    return pezEncontrado;
}

//Esta llamada debería devolver 'true'
console.log(buscarPez(banco_peces, 'Nemo')); 

// //Esta llamada debería devolver 'true'
console.log(buscarPez(banco_peces, 'Sipho'));

// //Esta llamada debería devolver 'false'
 console.log(buscarPez(banco_peces, 'Tenacitas'));

