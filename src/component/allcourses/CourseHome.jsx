import React from "react";
import "./courses.css";
// import { coursesCard } from "../../dummydata";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import "../../App.css";

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />;
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
