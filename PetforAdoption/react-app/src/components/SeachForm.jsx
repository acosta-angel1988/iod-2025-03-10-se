import React from "react";

export default function SearchForm({ query, setQuery, placeholder }) {
  return (
    <input
      type="text"
      value={query}
      placeholder={placeholder}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: 8,
        width: "100%",
        maxWidth: 400,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 4,
        border: "1px solid #ccc",
      }}
    />
  );
}
