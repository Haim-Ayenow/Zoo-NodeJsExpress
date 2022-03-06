const Employees = require(`../Models/Employees-Model`);

module.exports = {
  GetEmployees: (req, res, next) => {
    Employees.find()
      .then((Employees) => {
        res.status(200).json(Employees);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed`,
          error: err,
        });
      });
  },

  GetEmployeeById: (req, res, next) => {
    Employees.findById(req.params.id)
      .then((Employee) => {
        res.status(200).json(Employee);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to get employee`,
          error: err,
        });
      });
  },

  addEmployee: (req, res) => {
    Employees.create(req.body)
      .then((Employee) => {
        res.status(201).json(Employee);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to add employee`,
          error: err,
        });
      });
  },

  UpdateEmployee: (req, res) => {
    Employees.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((Employee) => {
        res.status(200).json(Employee);
      })
      .catch((err) => {
        res.status(500).json({
          massage: `failed to update employee`,
          error: err,
        });
      });
  },

  DeleteEmployee:(req,res)=>{
      Employees.findByIdAndDelete(req.params.id)
      .then(()=>{
          res.status(200).json({
              massage:`employee deleted successfully`,
          })
      })
      .catch(err =>{
          res.status(500).json({
              massage: `failed to delete employee`,
              error: err
          })
      })
  }
};
