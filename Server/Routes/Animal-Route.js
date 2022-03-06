const AnimalRoute= require(`express`).Router();

const{
    GetAnimals,
    GetAnimalById,
    addAnimal,
    UpdateAnimal,
    DeleteAnimal,
} = require(`../Controllers/Animal-Ctrl`);

AnimalRoute.get(`/`,GetAnimals);
AnimalRoute.get(`/:id`,GetAnimalById);
AnimalRoute.post(`/`,addAnimal);
AnimalRoute.put(`/:id`,UpdateAnimal);
AnimalRoute.delete(`/:id`,DeleteAnimal);

module.exports = AnimalRoute