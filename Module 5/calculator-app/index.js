const express = require("express");
const port = 3000;
const app = require("./jest/app");
const calculatorRoutes = require("./routes/calculator.routes");
const lab3 = require("./routes/calculator.routes");
const extraRoutes = require("./routes/extraRoutes");
//const calculatorController = require("./routes/calculatorRoutes");

app.use(express.json());
app.use("/", express.static("public"));

// map the calculator routes to our app
app.use("/calculator", calculatorRoutes);
app.use("/calculator2", extraRoutes);
app.use("/lab3", lab3);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
