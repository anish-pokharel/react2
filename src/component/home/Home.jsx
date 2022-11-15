import React from "react";
import AboutCard from "../about/AboutCard";
import Hero from "./hero/Hero";
import BlogCard from "../blog/BlogCard";
import Testimonal from "./testimonal/Testimonal";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      {/* <Test /> */}
      {/* <BlogCard /> */}
      <Testimonal />
    </>
  );
};

export default Home;
