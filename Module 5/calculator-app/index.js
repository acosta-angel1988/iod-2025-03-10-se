const express = require('express');
const port = 3000;
const app = require('./jest/app');
const calculatorRoutes = require('./routes/calculator.routes');
const extraRoutes = require('./routes/extraRoutes');
const calculatorController = require('./routes/calculatorRoutes');

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


app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})