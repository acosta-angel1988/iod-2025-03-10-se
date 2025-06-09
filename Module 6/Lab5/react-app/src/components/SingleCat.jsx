// SingleCat.jsx
import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div className="border p-3 m-2 rounded shadow">
      <h2 className="text-xl font-bold">{cat.name}</h2>
      <p className="text-gray-600">Origin: {cat.origin}</p>
    </div>
  );
};

export default SingleCat;