const express = require('express');
const app = express();
const port = 3000;

const calculatorRoutes = require('./routes/calculator.routes');
const extraRoutes = require('./routes/extraRoutes');
const calculatorController = require('./routes/calculatorRoute');
const Calculator = require('./libraries/Calculator');

app.use(express.json());
app.use("/", express.static("public"));




// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.use('/calculator2', extraRoutes);

//Lab 3
app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
}

let result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
    default:
        return res.status(400).json({ error: 'Invalid operator' });
}
    res.json({ result });
});

let myCalc1 = new Calculator()
let myCalc2 = new Calculator()
myCalc1.add(3,4)
myCalc1.add(4,2)
myCalc2.add(5,4)

let myCalc3 = new Calculator()
let myCalc4 = new Calculator()
let myCalc5 = new Calculator()

myCalc3.subtract(3,4)
myCalc4.multiply(4,2)
myCalc5.divide(5,4)

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})