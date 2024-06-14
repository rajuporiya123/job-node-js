const express = require("express");
const multer = require("multer");
const token = require('../midleware/tokencheck')
const {
  employersignUp,
  employersignIn,
  employerregister,
  employerJobPost,
  employerDashboard,
  companyList
} = require("../controller/employercontroller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/video");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const router = express.Router();
var upload = multer({ storage: storage });

router.post(
  "/employerregister",
  upload.fields([
    { name: "introVideolink", maxCount: 1 },
    { name: "workVideolink", maxCount: 1 },
  ]),
  employerregister 
);
router.post("/employerjobpost", employerJobPost);
router.get('/employerdashboard',token(),employerDashboard)
router.post("/employersignup", employersignUp);
router.post("/employersignin", employersignIn);
router.get("/comapny",companyList);

module.exports = router;