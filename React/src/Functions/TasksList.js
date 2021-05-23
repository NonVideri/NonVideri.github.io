import React from "react";

// Render tasks as a list
export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <div key={id}>
          <div className="alert alert-info alert-dismissible">
            <button className="close" onClick={() => handleDelete(id)}>x</button>
            <h4>{title + " "}</h4>
          {!description ? null : <p className="appline">{description}</p>}
          </div>
        </div>
      ))}
    </ul>
  );
}
