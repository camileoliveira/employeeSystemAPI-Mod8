const employees = [
  {
    id: 1,
    name: "Luiz",
    role: "Softer Engineer",
    department: "TI",
    salary: 10.0,
  },
];
const generateId = require("../utils/generateId");


function addEmployee(name, role, department, salary) {
  const id = generateId();

  const newEmployee = {
    id: id,
    name: name,
    role: role,
    department: department,
    salary: salary,
  };

  employees.push(newEmployee);
  return newEmployee;
}

function listAllEmployees() {
  return employees;
}

function updateEmployee(id, name, role, department, salary) {
  const index = employees.findIndex((employee) => employee.id == id);

  if (index == -1) {
    return false;
  }

  employees[index].name = name;
  employees[index].role = role;
  employees[index].department = department;
  employees[index].salary = salary;
  return employees[index];
}

function deleteEmployee(id) {
  const index = employees.findIndex((employee) => employee.id == id);
  if (index == -1) {
    return false;
  }
  employees.splice(index, 1);
  return true;
}

function findEmployeeByName(name) {
  const filteredEmployee = employees.filter(
    (employee) => employee.name == name
  );
  return filteredEmployee;
}

function findEmployeeByRole(role) {
  const filteredEmployee = employees.filter(
    (employee) => employee.role == role
  );
  return filteredEmployee;
}

function findEmployeeByDepartment(department) {
  const filteredEmployee = employees.filter(
    (employee) => employee.department == department
  );
  return filteredEmployee;
}

function findEmployeeBySalary(salary) {
  const filteredEmployee = employees.filter(
    (employee) => employee.salary == salary
  );
  return filteredEmployee;
}

module.exports = {
  addEmployee,
  listAllEmployees,
  updateEmployee,
  deleteEmployee,
  findEmployeeByName,
  findEmployeeByRole,
  findEmployeeByDepartment,
  findEmployeeBySalary
};
