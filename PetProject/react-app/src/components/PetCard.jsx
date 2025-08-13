import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className={styles.petCard}>
      <img
        src={pet.photo || "https://via.placeholder.com/280x180?text=No+Image"}
        alt={pet.name}
        className={styles.petImage}
      />
      <h3 className={styles.petName}>{pet.name}</h3>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Species:</strong> {pet.species || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Breed:</strong> {pet.breed || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Age:</strong> {pet.age || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Sex:</strong> {pet.sex || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Size:</strong> {pet.size || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Color:</strong> {pet.color || "N/A"}
      </p>
      <p className={styles.petDetail}>
        <strong className={styles.petDetailStrong}>Location:</strong> {pet.location || "N/A"}
      </p>
      <p className={styles.petDescription}>
        {pet.description || "No description available."}
      </p>
    </div>
  );
};

export default PetCard;