import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);
  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
      {/* <Link to="/courses">Back All Courses</Link> */}
      <Link to=".." relative="path">
        Back All Courses
      </Link>
    </>
  );
};

export default SingleCourse;
