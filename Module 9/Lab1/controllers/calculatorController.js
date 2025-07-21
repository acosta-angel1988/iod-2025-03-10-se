const calc = require('../models/calculatorModel');

function parseNumbers(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Both "a" and "b" must be valid numbers' });
    return null;
  }

  return { a, b };
}

exports.add = (req, res) => {
  const numbers = parseNumbers(req, res);
  if (!numbers) return;
  res.json({ result: calc.add(numbers.a, numbers.b) });
};

exports.subtract = (req, res) => {
  const numbers = parseNumbers(req, res);
  if (!numbers) return;
  res.json({ result: calc.subtract(numbers.a, numbers.b) });
};

exports.multiply = (req, res) => {
  const numbers = parseNumbers(req, res);
  if (!numbers) return;
  res.json({ result: calc.multiply(numbers.a, numbers.b) });
};

exports.divide = (req, res) => {
  const numbers = parseNumbers(req, res);
  if (!numbers) return;

  try {
    res.json({ result: calc.divide(numbers.a, numbers.b) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};