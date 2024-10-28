const {
  addEmployee,
  listAllEmployees,
  updateEmployee,
  deleteEmployee,
  findEmployeeByName,
  findEmployeeByRole,
  findEmployeeByDepartment,
  findEmployeeBySalary,
} = require("../repository/employeeRepository");

function addEmployeeService(name, role, department, salary) {
  return addEmployee(name, role, department, salary);
}

function listAllEmployeesService() {
  return listAllEmployees();
}

function updateEmployeeService(id, name, role, department, salary) {
  return updateEmployee(id, name, role, department, salary);
}

function deleteEmployeeService(id) {
  return deleteEmployee(id);
}

function findEmployeeByNameService(name) {
  return findEmployeeByName(name);
}

function findEmployeeByRoleService(role) {
  return findEmployeeByRole(role);
}

function findEmployeeByDepartmentService(department) {
  return findEmployeeByDepartment(department);
}

function findEmployeeBySalaryService(salary) {
  return findEmployeeBySalary(salary);
}

module.exports = {
  addEmployeeService,
  listAllEmployeesService,
  updateEmployeeService,
  deleteEmployeeService,
  findEmployeeByNameService,
  findEmployeeByRoleService,
  findEmployeeByDepartmentService,
  findEmployeeBySalaryService,
};
