// DigitInput.jsx
import React from 'react';

const DigitInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="block mb-1">{label}</label>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default DigitInput;