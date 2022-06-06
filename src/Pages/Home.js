import React from "react";
import Business from "./Business";
import Customer from "./Customer";
import Hero from "./Hero";
import Marketing from "./Marketing";
import Services from "./Services";
import Summary from "./Summary";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Customer />
      <Marketing />
      <Business />
      <Summary />
      <Testimonial />
    </>
  );
};

export default Home;
