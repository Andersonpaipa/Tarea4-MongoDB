// ===============================================
//  BASE DE DATOS: veterinaria
//  Caso de uso: Dueños y Mascotas
//  Autor: Anderson Paipa y equipo
// ===============================================

// --- Seleccionar base de datos ---
use veterinaria;

// --- Creación de colecciones ---
db.createCollection("owners");
db.createCollection("pets");

// --- Inserción de Dueños (10 documentos) ---
db.owners.insertMany([
  { _id: 1, name: "Carlos López", phone: "3001234567", address: "Cra 12 #23-10" },
  { _id: 2, name: "María Torres", phone: "3015678910", address: "Cl 45 #11-05" },
  { _id: 3, name: "Andrés Pérez", phone: "3020765432", address: "Av 68 #30-20" },
  { _id: 4, name: "Lucía Ramírez", phone: "3008765411", address: "Cl 100 #45-70" },
  { _id: 5, name: "Juan Castillo", phone: "3105567890", address: "Cra 50 #80-12" },
  { _id: 6, name: "Sandra Nieto", phone: "3108558899", address: "Cl 80 #20-15" },
  { _id: 7, name: "Felipe Rojas", phone: "3012458799", address: "Cra 25 #40-50" },
  { _id: 8, name: "Juliana Ortiz", phone: "3018877766", address: "Cl 72 #15-23" },
  { _id: 9, name: "Miguel Soto", phone: "3125544333", address: "Av 9 #140-22" },
  { _id: 10, name: "Paula Hernández", phone: "3167774521", address: "Cra 18 #60-10" }
]);

// --- Inserción de Mascotas (100 documentos) ---
db.pets.insertMany([
  { _id: 1, owner_id: 1, name: "Firulais", species: "Perro", breed: "Labrador", age: 4 },
  { _id: 2, owner_id: 1, name: "Nina", species: "Gato", breed: "Siames", age: 2 },
  { _id: 3, owner_id: 1, name: "Bruno", species: "Perro", breed: "Pastor Alemán", age: 3 },
  { _id: 4, owner_id: 1, name: "Coco", species: "Gato", breed: "Criollo", age: 1 },

  { _id: 5, owner_id: 2, name: "Rocky", species: "Perro", breed: "Pitbull", age: 5 },
  { _id: 6, owner_id: 2, name: "Pelusa", species: "Gato", breed: "Angora", age: 3 },
  { _id: 7, owner_id: 2, name: "Bobby", species: "Perro", breed: "Beagle", age: 4 },
  { _id: 8, owner_id: 2, name: "Misu", species: "Gato", breed: "Persa", age: 2 },

  { _id: 9, owner_id: 3, name: "Max", species: "Perro", breed: "Criollo", age: 6 },
  { _id: 10, owner_id: 3, name: "Kira", species: "Gato", breed: "Persa", age: 1 },
  { _id: 11, owner_id: 3, name: "Rex", species: "Perro", breed: "Labrador", age: 2 },
  { _id: 12, owner_id: 3, name: "Molly", species: "Gato", breed: "Siames", age: 4 },

  { _id: 13, owner_id: 4, name: "Loki", species: "Perro", breed: "Husky", age: 2 },
  { _id: 14, owner_id: 4, name: "Luna", species: "Gato", breed: "Bengalí", age: 4 },
  { _id: 15, owner_id: 4, name: "Thor", species: "Perro", breed: "Doberman", age: 3 },
  { _id: 16, owner_id: 4, name: "Nala", species: "Gato", breed: "Criollo", age: 5 },

  { _id: 17, owner_id: 5, name: "Toby", species: "Perro", breed: "Beagle", age: 7 },
  { _id: 18, owner_id: 5, name: "Milo", species: "Gato", breed: "Criollo", age: 2 },
  { _id: 19, owner_id: 5, name: "Spike", species: "Perro", breed: "Pitbull", age: 1 },
  { _id: 20, owner_id: 5, name: "Lola", species: "Gato", breed: "Bengalí", age: 3 },

  { _id: 21, owner_id: 6, name: "Zeus", species: "Perro", breed: "Rottweiler", age: 6 },
  { _id: 22, owner_id: 6, name: "Daisy", species: "Gato", breed: "Persa", age: 4 },
  { _id: 23, owner_id: 6, name: "Oreo", species: "Perro", breed: "Pug", age: 2 },
  { _id: 24, owner_id: 6, name: "Mora", species: "Gato", breed: "Angora", age: 1 },

  { _id: 25, owner_id: 7, name: "Simba", species: "Perro", breed: "Labrador", age: 5 },
  { _id: 26, owner_id: 7, name: "Cleo", species: "Gato", breed: "Criollo", age: 4 },
  { _id: 27, owner_id: 7, name: "Chester", species: "Perro", breed: "Beagle", age: 2 },
  { _id: 28, owner_id: 7, name: "Katy", species: "Gato", breed: "Siames", age: 3 },

  { _id: 29, owner_id: 8, name: "Buddy", species: "Perro", breed: "Pastor Alemán", age: 3 },
  { _id: 30, owner_id: 8, name: "Arya", species: "Gato", breed: "Bengalí", age: 2 },
 { _id: 31, owner_id: 11, name: "Quesito", species: "Perro", breed: "Labrador", age: 2, owner_name: "Karen Garzón" },
var speciesList = ["Perro", "Gato"];
var breedsPerro = ["Labrador", "Pug", "Pastor Alemán", "Golden", "Bulldog"];
var breedsGato = ["Siamés", "Persa", "Bengala", "Criollo"];

var pets = [];
for (let i = 1; i <= 100; i++) {
  let isDog = Math.random() > 0.5;
  pets.push({
    _id: i,
    owner_id: Math.ceil(Math.random() * 10),
    name: "Mascota" + i,
    species: isDog ? "Perro" : "Gato",
    breed: isDog ? breedsPerro[Math.floor(Math.random() * breedsPerro.length)] 
                 : breedsGato[Math.floor(Math.random() * breedsGato.length)],
    age: Math.floor(Math.random() * 15) + 1
  });
}

db.pets.insertMany(pets);

// ------------------------------
//  CONSULTAS BÁSICAS
// ------------------------------
db.pets.find().limit(5);  

db.pets.find({ owner_id: 3 });

db.pets.updateOne(
  { _id: 10 },
  { $set: { age: 2 } }
);

db.pets.deleteOne({ _id: 15 });


// ------------------------------
//  CONSULTAS CON FILTROS
// ------------------------------
db.pets.find({ age: { $gt: 5 } });

db.pets.find({ species: "Perro", breed: "Labrador" });


// ------------------------------
//  AGGREGATIONS
// ------------------------------

// Total por especie
db.pets.aggregate([
  { $group: { _id: "$species", total: { $sum: 1 } } }
]);

// Promedio por especie
db.pets.aggregate([
  { $group: { _id: "$species", promedioEdad: { $avg: "$age" } } }
]);

// Top 5 razas
db.pets.aggregate([
  { $group: { _id: "$breed", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

