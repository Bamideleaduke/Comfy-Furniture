import React from "react";
import { Contact } from "../component/Contact";
import { Featuredproduct } from "../component/Featuredproduct";
import { Hero } from "../component/Hero";
import { Services } from "../component/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Featuredproduct />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
