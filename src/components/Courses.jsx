import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useState } from "react";
import courses from "../data/courses";

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key) {
    return sortCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  return (
    <>
      <h1>{sortKey ? `Courses Sorted By ${sortKey}` : "All Courses"}</h1>
      {sortedCourses.map((course) => (
        <div className="courseLink" key={course.id}>
          <Link className="link" to={course.slug}>
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
