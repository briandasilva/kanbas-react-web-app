import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div className="flex-fill">
      {
        <div className="d-flex justify-content-start m-2">
          <button className="btn btn-outline-dark">Collapse All</button>
          <button className="btn btn-outline-dark">View Progress</button>
          <select className="btn btn-outline-dark">
            <option>Publish All</option>
            <option>Publish All Modules and Items</option>
            <option>Publish Modules only</option>
            <option>UnPublish All Modules</option>
          </select>
          <button className="btn btn-danger">+ Module</button>
        </div>
      }
      <hr className="m-3" />

      <ul className="list-group">
        <li className="list-group-item flex-column">
          <div className="input-group">
            <input
              className="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <button
              className="btn btn-xs btn-success"
              onClick={handleAddModule}
            >
              Add
            </button>
            <button
              className="btn btn-outline-dark btn-xs"
              onClick={handleUpdateModule}
            >
              Update
            </button>
          </div>
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
      </ul>
      <ul className="list-group wd-modules">
        {modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    className="btn btn-outline-dark btn-sm mx-1"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    X
                  </button>
                </span>
              </div>
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
