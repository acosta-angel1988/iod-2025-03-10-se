const express = require("express");
const router = express.Router();

router.get('/max', (req, res) => {
let number1 = parseInt(req.query.num1);
let random = Math.floor(Math.random() * (number1 + 1));
console.log(random)
res.status(200)
res.json({result5: random})
})

router.get('/maxmin', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let random = Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
console.log(random)
res.status(200)
res.json({result6: random})
})

module.exports = router;