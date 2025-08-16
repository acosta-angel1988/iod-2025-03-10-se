import React, { useEffect, useMemo, useState } from "react";
import SearchFilterForm from "../SearchFilterForm";
import PetList from "../PetList";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const DogPage = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/pets?type=dog`)
      .then((r) => r.json())
      .then(setPets)
      .catch(console.error);
  }, []);

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      const nameOk = p.name?.toLowerCase().includes(searchTerm.toLowerCase());
      const breedOk = breed ? p.breed?.toLowerCase().includes(breed.toLowerCase()) : true;
      const genderOk = gender ? p.gender?.toLowerCase() === gender.toLowerCase() : true;
      const colorOk = color ? p.color?.toLowerCase().includes(color.toLowerCase()) : true;
      const locOk = location ? p.location?.toLowerCase().includes(location.toLowerCase()) : true;
      return nameOk && breedOk && genderOk && colorOk && locOk;
    });
  }, [pets, searchTerm, breed, gender, color, location]);

  return (
    <div className="container">
      <h1>Find Your Dog</h1>
      <SearchFilterForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      <PetList pets={filtered} />
    </div>
  );
};

export default DogPage;