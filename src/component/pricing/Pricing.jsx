import React from "react";
import Back from "../common/back/Back";
import Faq from "./Faq";
import PriceCard from "./PriceCard";
import "./price.css";
import "../../App.css";

const Pricing = () => {
  return (
    <>
      <Back title="Choose TheRight Plan" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
