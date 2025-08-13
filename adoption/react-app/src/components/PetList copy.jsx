import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  if (pets.length === 0) {
    return <p>No pets found.</p>;
  }

  return (
    <div className="pet-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;