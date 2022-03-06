const EmployeeRoute= require(`express`).Router();

const{
    getEmployees,
    GetEmployeeById,
    addEmployee,
    UpdateEmployee,
    DeleteEmployee,
    GetEmployees
} = require(`../Controllers/Employee-ctrl`);

EmployeeRoute.get(`/`,GetEmployees);
EmployeeRoute.get(`/:id`,GetEmployeeById);
EmployeeRoute.post(`/`,addEmployee);
EmployeeRoute.put(`/:id`,UpdateEmployee);
EmployeeRoute.delete(`/:id`,DeleteEmployee);

module.exports = EmployeeRoute