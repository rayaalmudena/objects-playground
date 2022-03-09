/**
 * Métodos de objetos
 */

/**
 * Implementa el método "aprender"; que está parcialmente implementado. LA función recibe por parámetro un string, con el nuevo conocimiento aprendido. Debe actualizar la propiedad 'conocimientos' con dicho nuevo string.
 */
let estudiante = {
    nombre: "Edu",
    conocimientos: [],
    aprender: function (nuevoConocimiento) {
        // una línia de código
        this.conocimientos.push(nuevoConocimiento);
    }

}

estudiante.aprender('HTML')
console.log("Debería aparecer aquí que el estudiante ha aprendido HTML:", estudiante.conocimientos)