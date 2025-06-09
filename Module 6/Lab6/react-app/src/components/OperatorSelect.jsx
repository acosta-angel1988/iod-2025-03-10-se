// OperatorSelect.jsx
import React from 'react';

const OperatorSelect = ({ operator, onChange }) => {
  return (
    <div className="mb-3">
      <label className="block mb-1">Operator</label>
      <select
        className="w-full p-2 border rounded"
        value={operator}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
    </div>
  );
};

export default OperatorSelect;