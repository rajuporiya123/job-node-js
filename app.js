require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
require("./config/connection");
const mongoose = require("mongoose");
mongoose.set("debug", true);
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res, next) => {
  res.send("Hello Job Portal");
});

app.use(express.json({ limit: "150mb" }));

const employeeRouter = require("./routes/employee");
const employerRouter = require("./routes/employer");

app.use("/employee", employeeRouter);
app.use("/employer", employerRouter);
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
app.listen(process.env.PORT, () => {
  console.log("app is running on", process.env.PORT);
});