import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import courses from "../data/courses";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
    }
    setSortKey();
    setSortedCourses([...courses]);
  }, [sortKey, navigate]);

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
