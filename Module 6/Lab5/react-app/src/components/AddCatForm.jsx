// AddCatForm.jsx
import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !origin.trim()) return;

    onAddCat({ name: name.trim(), origin: origin.trim() });
    setName('');
    setOrigin('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">Add a New Big Cat</h2>
      <div className="mb-3">
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Cheetah"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Origin:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="e.g. Africa"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Add Cat
      </button>
    </form>
  );
};

export default AddCatForm;