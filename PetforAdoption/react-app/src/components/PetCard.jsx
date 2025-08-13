import React from "react";

export default function PetCard({ pet, type }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        width: 180,
        padding: 12,
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={pet.image}
        alt={`${type} named ${pet.name}`}
        style={{ width: "100%", borderRadius: 6, marginBottom: 8 }}
      />
      <h3 style={{ margin: "8px 0 4px" }}>{pet.name}</h3>
      <p style={{ margin: 0, fontSize: 14, color: "#555" }}>
        {type} - {pet.breed}
      </p>
      <p style={{ margin: 0, fontSize: 12, color: "#777" }}>Age: {pet.age} years</p>
    </div>
  );
}