const express = require('express');
const router = express.Router();

const calculatorController = require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2;
    console.log(sub)
    res.status(200)
    res.json({result2:sub})
})

router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mul = number1 * number2
    console.log(mul)
    res.status(200)
    res.json({result3:mul})
})

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = number1 / number2
    console.log(div)
    res.status(200)
    res.json({result4:div})

})
module.exports = router;