import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  if (!pets.length) return <p>No pets found.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
      {pets.map((pet) => (
        <PetCard key={pet.pet_id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;