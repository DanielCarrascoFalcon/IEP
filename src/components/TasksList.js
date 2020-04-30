import React from "react";

const TasksList = ({ tasks }) => {
  return (
    <div>
      <center>
        <h1>Lista de tareas</h1>
      </center>
      {tasks.map((task) => (
        <div className="col-md-4" key={task.id}>
          <div className="card mt-4 text-center">
            <div className="card-header justify-content-center">
              <h3>{task.place}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p>
                <mark>{task.attendant}</mark>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
