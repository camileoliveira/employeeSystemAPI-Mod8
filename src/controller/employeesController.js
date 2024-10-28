const {
  addEmployeeService,
  listAllEmployeesService,
  updateEmployeeService,
  deleteEmployeeService,
  findEmployeeByNameService,
  findEmployeeByRoleService,
  findEmployeeByDepartmentService,
  findEmployeeBySalaryService,
} = require("../service/employeesService");

const dataValidation = require("../utils/dataValidation");



function addEmployeeHandler(req, res) {
  const { name, role, department, salary } = req.body;
  const isValid = dataValidation({ name, role, department, salary });

  if (!isValid) {
    res.status(400).send("invalid employee data");
  }

  const newEmployee = addEmployeeService(name, role, department, salary);
  res.status(200).send(newEmployee);
}

function listAllEmployeesHandler(req, res) {
  const employees = listAllEmployeesService();
  res.status(200).send(employees);
}

function updateEmployeeHandler(req, res) {
  const { id } = req.params;
  const { name, role, department, salary } = req.body;
  const isValid = dataValidation({ name, role, department, salary });
  if (!isValid) {
    return res.status(400).send("Invalid new data!");
  }
  const updatedEmployee = updateEmployeeService(
    id,
    name,
    role,
    department,
    salary
  );
  return res.status(200).send(updatedEmployee);
}

function deleteEmployeeHandler(req, res) {
  const { id } = req.params;
  const removedEmployee = deleteEmployeeService(id);
  if (removedEmployee) {
    return res.status(200).send("Employee removed");
  }
  return res.status(404).send("Employee not found");
}

function findEmployeeHandler(req, res) {
  const { name, role, department, salary } = req.query;

  if (name) {
    const employeeName = findEmployeeByNameService(name);
    return res.status(200).send(employeeName);
  }

  if (role) {
    const employeeRole = findEmployeeByRoleService(role);
    return res.status(200).send(employeeRole);
  }

  if (department) {
    const employeeDepartment = findEmployeeByDepartmentService(department);
    return res.status(200).send(employeeDepartment);
  }

  if (salary) {
    const employeeSalary = findEmployeeBySalaryService(salary);
    return res.status(200).send(employeeSalary);
  }
}

module.exports = {
  addEmployeeHandler,
  listAllEmployeesHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
  findEmployeeHandler,
};
