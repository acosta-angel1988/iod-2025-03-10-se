import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  if (!pets || pets.length === 0) {
    return <p className="container">No pets found matching your criteria.</p>;
  }

  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16
      }}
    >
      {pets.map((pet) => (
        <PetCard key={pet._id || pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;