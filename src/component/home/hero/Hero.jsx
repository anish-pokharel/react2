import React from "react";
import Heading from "../../common/heading/Heading";
import Title from "../../common/title/Title";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle="WELCOME TO OPLM " title="Best Online Library " />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur quod nisi molestiae ea veniam obcaecati sed rem
              temporibus sit cum harum eaque quam fugit iure inventore repellat
              iste, sint fugiat. Odit asperiores quia eveniet laborum laudantium
              debitis, ullam illo laboriosam!
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                Views Books <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
