const fs = require('fs');

let tareas = fs.readFileSync('./tareas.json', 'utf-8');

let tareasDB = JSON.parse(tareas);

module.exports = tareasDB;