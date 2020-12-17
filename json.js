/*
Utilizando el modulo nativo fs para leer archivos.
*/

const fs = require('fs');
let dbPersonas = fs.readFileSync('./persona.json', 'utf8');
console.log(typeof dbPersonas) //Es tipo json, tenemos que parsear
dbPersonas = JSON.parse(dbPersonas);
console.log(dbPersonas)
console.log(typeof dbPersonas)
/*
Javascript Object Notation
*/

let persona1 = {
  nombre: 'Octavio',
  edad: 40,
  estatura: 1.75,
  direccion: 'Peru',
}

let persona2 = {
  nombre: 'Laura',
  edad: 20,
  estatura: 1.6,
  direccion: 'Chile',
}

let listaPersonas = [];
listaPersonas.push(persona1);
listaPersonas.push(persona2);
//listaPersonas.push(persona1, persona2)