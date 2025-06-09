// BigCats.jsx
import React, { useState } from 'react';
import SingleCat from './SingleCat';
import catsData from './catsData';
import AddCatForm from './AddCatForm';

const BigCats = () => {
  const [cats, setCats] = useState(catsData);
  const [sortOrder, setSortOrder] = useState(null);
  const [originFilter, setOriginFilter] = useState('All');

  const uniqueOrigins = ['All', ...new Set(cats.map(cat => cat.origin))];

  let displayedCats = [...cats];
  if (originFilter !== 'All') {
    displayedCats = displayedCats.filter(cat => cat.origin === originFilter);
  }

  if (sortOrder === 'asc') {
    displayedCats.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'desc') {
    displayedCats.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Add a new cat
  const addCat = (newCat) => {
    const newCatWithId = {
      ...newCat,
      id: cats.length ? cats[cats.length - 1].id + 1 : 1, // Generate new ID
    };
    setCats([...cats, newCatWithId]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Big Cats</h1>

      {/* AddCatForm */}
      <AddCatForm onAddCat={addCat} />

      {/* Sorting and Filtering Controls */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div>
          <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2" onClick={() => setSortOrder('asc')}>
            Sort A-Z
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => setSortOrder('desc')}>
            Sort Z-A
          </button>
        </div>

        <div>
          <label className="mr-2">Filter by origin:</label>
          <select
            className="p-1 border rounded"
            value={originFilter}
            onChange={(e) => setOriginFilter(e.target.value)}
          >
            {uniqueOrigins.map((origin, index) => (
              <option key={index} value={origin}>
                {origin}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Cat List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedCats.map(cat => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default BigCats;
