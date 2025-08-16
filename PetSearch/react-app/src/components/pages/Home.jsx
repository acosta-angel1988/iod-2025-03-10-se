import React from "react";
import "./Home.css";
import SearchForm from "../SearchForm";

const Home = () => {
  return (
    <div className="home-hero">
      <div className="container">
        <h1>Find your new best friend</h1>
        <p>Browse adoptable dogs and cats near you.</p>
        <SearchForm />
      </div>
    </div>
  );
};

export default Home;