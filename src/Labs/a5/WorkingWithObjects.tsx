import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "CS 4550",
  });
  const ASSIGNMENT_URL = "${API_BASE}/a5/assignment";
  const MODULE_URL = "${API_BASE}/a5/module";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>

      <br />
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completion
      </a>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: Boolean(e.target.value) })
        }
        value={assignment.completed.toString()}
      />
      <h4> Module </h4>
      <a href={`${MODULE_URL}/name/${module.name}`}>Update Name</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />

      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}>Get Assignment</a>
      <br />
      <a href={`${API_BASE}/a5/module`}>Get Module</a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}>Get Title</a>
      <br />
      <a href={`${API_BASE}/a5/module/name`}>Get Name</a>
    </div>
  );
}
export default WorkingWithObjects;
