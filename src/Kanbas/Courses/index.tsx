import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { FaChevronDown, FaGlasses } from "react-icons/fa";
import Assignments from "./Assignments";
function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="d-block d-md-none">
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a href="/Kanbas/Navigation/index.html">
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
            </a>
            <a className="navbar-brand" href="#">
              {course?.number} {course?.name}
            </a>
            <a href="/Kanbas/Courses/Navigation/index.html">
              <button className="navbar-toggler" type="button">
                <FaChevronDown />
              </button>
            </a>
          </div>
        </nav>
      </div>
      <div
        className="d-flex align-items-center d-none d-md-inline-flex"
        style={{ color: "red" }}
      >
        <div className="mx-3">
          <HiMiniBars3 />
        </div>
        <div className="mt-1 pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                {course?.number} {course?.name}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Routes>
                  <Route path="/" element={<Navigate to="Home" />} />
                  <Route path="Home" element={<span>Home</span>} />
                  <Route path="Modules" element={<span>Modules</span>} />
                  <Route path="Piazza" element={<span>Piazza</span>} />
                  <Route
                    path="Assignments"
                    element={<span>Assignments</span>}
                  />
                  <Route
                    path="Assignments/:assignmentId"
                    element={<span>Assignment Editor</span>}
                  />
                  <Route path="Grades" element={<span>Grades</span>} />
                </Routes>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <hr className="mx-4 mt-0" />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        <div
          className="flex-fill bottom-0 end-0 px-2"
          style={{ left: "320px", top: "70px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
