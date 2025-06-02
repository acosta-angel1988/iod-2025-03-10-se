const express = require("express");
const router = express.Router();

router.get('/add', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 + number2
console.log(sum)
res.status(200)
res.json({result:sum})
})


router.get('/multiply', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let multiply = number1 * number2
console.log(multiply)
res.status(200)
res.json({result2: multiply})
})

router.get('/divide', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let divide = number1 / number2
console.log(divide)
res.status(200)
res.json({result3: divide})
})

router.get('/subtract', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let subtract = number1 - number2
console.log(subtract)
res.status(200)
res.json({result4:subtract})
})




module.exports = router;