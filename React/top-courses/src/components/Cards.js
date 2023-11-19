import React from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  console.log(courses);
  function getAllCourses() {
    const allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((coursesData) => {
        allCourses.push(coursesData);
      });
    });
    return allCourses;
  }
  return (
    <div>
      {getAllCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cards;
