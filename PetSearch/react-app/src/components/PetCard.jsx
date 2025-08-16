import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div style={{
      width: 220,
      background: "var(--card)",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 8px 30px rgba(0,0,0,.07)"
    }}>
      <img
        src={pet.image}
        alt={pet.name}
        style={{ width: "100%", height: 160, objectFit: "cover" }}
      />
      <div style={{ padding: 12 }}>
        <h3 style={{ marginBottom: 6 }}>{pet.name}</h3>
        <p style={{ marginBottom: 6 }}>{pet.type} • {pet.breed}</p>
        <p style={{ marginBottom: 6 }}>Sex: {pet.gender}</p>
        <p style={{ marginBottom: 6 }}>Color: {pet.color}</p>
        <p style={{ marginBottom: 6 }}>Location: {pet.location}</p>
        <p style={{ marginBottom: 4, fontSize: 14 }}>Email: {pet.email}</p>
        <p style={{ margin: 0, fontSize: 14 }}>Phone: {pet.phone}</p>
      </div>
    </div>
  );
};

export default PetCard;