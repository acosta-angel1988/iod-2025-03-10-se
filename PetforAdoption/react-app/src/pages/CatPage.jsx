import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import PetList from "../components/PetList";

const catsData = [
  { id: 1, name: "Whiskers", age: 2, breed: "Siamese", image: "https://placekitten.com/200/200" },
  { id: 2, name: "Mittens", age: 3, breed: "Persian", image: "https://placekitten.com/201/200" },
  { id: 3, name: "Shadow", age: 1, breed: "Maine Coon", image: "https://placekitten.com/202/200" },
];

export default function CatPage() {
  const [query, setQuery] = useState("");

  const filteredCats = catsData.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Cats</h1>
      <SearchForm query={query} setQuery={setQuery} placeholder="Search cats by name..." />
      <PetList pets={filteredCats} petType="Cat" />
    </>
  );
}