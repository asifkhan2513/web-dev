import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  console.log(courses);
  const [likedCourses, setLikedCourses] = useState([]);
  function getAllCourses() {
    if (category === "All") {
      const allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((coursesData) => {
          allCourses.push(coursesData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {getAllCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
