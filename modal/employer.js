const mongoose = require("mongoose");

const employerUser = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    companyName: {
      type: String,
      default: "",
    },
    workEmail: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('EmployerUser',employerUser)
