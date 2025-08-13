import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import PetList from "../components/PetList";

const dogsData = [
  { id: 1, name: "Buddy", age: 4, breed: "Golden Retriever", image: "https://placedog.net/200/200?id=1" },
  { id: 2, name: "Max", age: 2, breed: "Bulldog", image: "https://placedog.net/201/200?id=2" },
  { id: 3, name: "Bella", age: 3, breed: "Labrador", image: "https://placedog.net/202/200?id=3" },
];

export default function DogPage() {
  const [query, setQuery] = useState("");

  const filteredDogs = dogsData.filter((dog) =>
    dog.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Dogs</h1>
      <SearchForm query={query} setQuery={setQuery} placeholder="Search dogs by name..." />
      <PetList pets={filteredDogs} petType="Dog" />
    </>
  );
}