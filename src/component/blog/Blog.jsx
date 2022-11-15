import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "../../App.css";

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container gird2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
