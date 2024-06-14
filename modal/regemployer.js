const mongoose = require("mongoose");

const regEmployerUser = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employer",
  },
  whyJoinUs: {
    type: String,
    default: "",
  },
  workVideolink: {
    type: String,
    default: "",
  },
  companyName: {
    type: String,
    default: "",
  },
  jobTitle: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  jobLocation: {
    type: String,
    default: "",
  },
  employmentType: {
    type: String,
    default: "",
  },
  compensationRange: {
    type: String,
    default: "",
  },
  introVideolink: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "",
  },
  qualifications: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["register", "step1", "step2", "step3"],
  },
  application: {
    type: String,
    default: "",
  },
  questionlist: {
    type: String,
    default: "",
  },
  externalWebsite: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("RegEmployerUser", regEmployerUser);
