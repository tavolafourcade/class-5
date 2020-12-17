let tareasDB = require('./funcionesDeTareas');
//console.table(tareasDB)

// console.log(process.argv)

let alternativa = process.argv[2];
switch(alternativa){
  case 'listar':
    console.table(tareasDB);
    break;
  
  case undefined:
    console.log('Atención - Tienes que pasar una acción');
    break;

  default:
    console.log('No entiendo qué quieres hacer');
}