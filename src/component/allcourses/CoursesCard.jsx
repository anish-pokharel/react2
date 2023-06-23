import React from "react";
import { cardData } from "../../dummydata";
import { coursesCard } from "../../dummydata";
import "./courses.css";

const CoursesCard = () => {
  return (
    <>
      {/* <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      <section className="CourseCard">
        <div className="card-row">
          {cardData.map((val, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                className="card-img-top"
                src={val.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.author}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="coursesCard">
        <div className="container gird2">
          {coursesCard.map((val) => {
            return (
              <div className="items">
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{val.coursesName}</h1>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                      {val.courTeacher.map((details) => {
                        return (
                          <>
                            <div className="box">
                              <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>
                    {val.priceAll}/{val.pricePer}
                  </h3>
                </div>
                <button className="online-btn">Enroll Now!</button>
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

export default CoursesCard;
