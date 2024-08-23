import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";
import NotFound from "./NotFound";
import { useEffect } from "react";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);
  // simply show notfound component
  //   if (!course) {
  //     return <NotFound />;
  //   }
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* <Link to="/courses">Back All Courses</Link>  misht hnaravorins ogtagorcenq haraberakan chanaparhner*/}
      <Link to=".." relative="path">
        Back All Courses
      </Link>
    </>
  );
};

export default SingleCourse;
