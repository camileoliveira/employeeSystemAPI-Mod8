function dataValidation(employee) {
    if (typeof employee.name !== "string") {
      return false;
    }
  
    if (typeof employee.role !== "string") {
      return false;
    }
  
    if (typeof employee.department !== "string") {
      return false;
    }
  
    if (typeof employee.salary !== "number") {
      return false;
    }
    return true
  }
  
  module.exports = dataValidation