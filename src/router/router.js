const express = require("express");
const router = express.Router();

const {
  addEmployeeHandler,
  listAllEmployeesHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
  findEmployeeHandler,
} = require("../controller/employeesController");

router.post("/employee", addEmployeeHandler);
router.get("/employee", listAllEmployeesHandler);
router.put("/employee/:id", updateEmployeeHandler);
router.delete("/employee/:id", deleteEmployeeHandler);
router.get("/employee/search", findEmployeeHandler);

module.exports = router;
