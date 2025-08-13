import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "180px",
        textAlign: "center",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={pet.image}
        alt={pet.name}
        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Sex: {pet.sex}</p>
      <p>Size: {pet.size}</p>
    </div>
  );
};

export default PetCard;
