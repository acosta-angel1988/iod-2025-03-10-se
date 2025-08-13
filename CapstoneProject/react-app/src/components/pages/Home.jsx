import React from "react";
import Navbar from "../Navbar";
import Section1 from "../Section1";
import SearchForm from "./SearchForm";
import Section3 from "../Section3";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <SearchForm />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;