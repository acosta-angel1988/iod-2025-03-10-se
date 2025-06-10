const express = require("express");
const app = express();
// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
const lab3 = require("./routes/calculator.routes");
app.use("/calculator", calculatorRoutes);
app.use("/lab3", lab3);
// export the app
module.exports = app;
