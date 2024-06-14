const express = require("express");
const {
  employeesignUp,
  employeesignIn,
  employeeProfile,
  employeeInfo
} = require("../controller/employeecontroller");

const router = express.Router();

router.post("/employeesignup", employeesignUp);
router.post("/employeesignin", employeesignIn);
router.post("/employeeprofile",employeeProfile);
router.get("/employeeinfo",employeeInfo);

module.exports = router