import React from "react";
import PetCard from "./PetCard";

export default function PetList({ pets, petType }) {
  if (pets.length === 0) return <p>No {petType.toLowerCase()}s found.</p>;

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} type={petType} />
      ))}
    </div>
  );
}