const Animals = require(`../Models/Animals-Model`);

module.exports = {
  GetAnimals: (req, res, next) => {
    Animals.find()
      .then((Animals) => {
        res.status(200).json(Animals);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed`,
          error: err,
        });
      });
  },

  GetAnimalById: (req, res, next) => {
    Animals.findById(req.params.id)
      .then((Animal) => {
        res.status(200).json(Animal);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to get animal`,
          error: err,
        });
      });
  },

  addAnimal: (req, res) => {
    Employees.create(req.body)
      .then((Animal) => {
        res.status(201).json(Animal);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to add animal`,
          error: err,
        });
      });
  },

  UpdateAnimal: (req, res) => {
    Animals.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((Animal) => {
        res.status(200).json(Animal);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to update animal`,
          error: err,
        });
      });
  },

  DeleteAnimal:(req,res)=>{
      Animals.findByIdAndDelete(req.params.id)
      .then(()=>{
          res.status(200).json({
              massage:`animal deleted successfully`,
          })
      })
      .catch(err =>{
          res.status(500).json({
              massage: `failed to delete animal`,
              error: err
          })
      })
  }
};
