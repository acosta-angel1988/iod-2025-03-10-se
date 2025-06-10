const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/add", (req, res) => {
  console.log(`ran through calculatorRoutes`);
  calculatorController.addNumbers(req, res);
});

router.get("/multiply", (req, res) => {
  console.log(`ran through calculatorRoutes`);
  calculatorController.multiplyNumbers(req, res);
});

router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let divide = number1 / number2;
  console.log(divide);
  res.status(200);
  res.json({ result3: divide });
});

router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let subtract = number1 - number2;
  console.log(subtract);
  res.status(200);
  res.json({ result4: subtract });
});

module.exports = router;
