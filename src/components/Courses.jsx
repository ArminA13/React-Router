import { Link } from "react-router-dom";
import courses from "../data/courses";

const Courses = () => {
  return (
    <>
      <h1>All Courses</h1>
      {courses.map((course) => (
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
