import React from "react";

const PetFilters = ({ filters, onChange, onSearch }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <select name="species" value={filters.species} onChange={onChange}>
        <option value="">Any Species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="rabbit">Rabbit</option>
      </select>

      <input
        type="text"
        name="breed"
        placeholder="Breed (optional)"
        value={filters.breed}
        onChange={onChange}
      />

      <select name="age" value={filters.age} onChange={onChange}>
        <option value="">Any Age</option>
        <option value="baby">Baby</option>
        <option value="young">Young</option>
        <option value="adult">Adult</option>
        <option value="senior">Senior</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location (ZIP or City)"
        value={filters.location}
        onChange={onChange}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default PetFilters;