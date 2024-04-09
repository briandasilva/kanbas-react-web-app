import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      {
        <div className="d-flex justify-content-between m-2">
          <div className="input-group w-25">
            <div className="form-outline" data-mdb-input-init>
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search for Assignments"
              />
            </div>
          </div>
          <div>
            <button className="btn btn-outline-dark">+ Group</button>
            <button className="btn btn-danger">+ Assignment</button>
            <button className="btn btn-outline-dark">
              <FaEllipsisV />
            </button>
          </div>
        </div>
      }
      <hr className="m-3" />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="font-weight-bold"
                  style={{ fontSize: 20, color: "black" }}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <div className="px-4" style={{ fontSize: 14 }}>
                  Multiple Modules | Due Sept 18th at 11:59PM | 100 Points
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
