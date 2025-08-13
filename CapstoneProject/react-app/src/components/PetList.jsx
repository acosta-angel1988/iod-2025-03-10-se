import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  if (!pets.length) return <p>No pets found matching your criteria.</p>;

  return (
    <div
      className="pet-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;