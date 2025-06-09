// Calculator.jsx
import React, { useState } from 'react';
import DigitInput from './DigitInput';
import OperatorSelect from './OperatorSelect';
import ResultDisplay from './ResultDisplay';

const Calculator = () => {
  const [digit1, setDigit1] = useState(0);
  const [digit2, setDigit2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const calculate = () => {
    let res;
    switch (operator) {
      case '+': res = digit1 + digit2; break;
      case '-': res = digit1 - digit2; break;
      case '*': res = digit1 * digit2; break;
      case '/': res = digit2 !== 0 ? digit1 / digit2 : 'Error'; break;
      default: res = 0;
    }
    setResult(res);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-semibold mb-4">Basic Calculator</h2>

      <DigitInput label="Digit 1" value={digit1} onChange={setDigit1} />
      <DigitInput label="Digit 2" value={digit2} onChange={setDigit2} />
      <OperatorSelect operator={operator} onChange={setOperator} />

      <button
        onClick={calculate}
        className="w-full py-2 bg-blue-600 text-white rounded mt-2"
      >
        Calculate
      </button>

      <ResultDisplay result={result} />
    </div>
  );
};

export default Calculator;