import React from 'react';

// A form to submit new task with description
export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="input-group mb-3 flex-column">
      <input
        className="form-control w-100"
        name="title"
        placeholder="New task"
        value={newTask.title || ''}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            className="form-control w-100"
            name="description"
            placeholder="Details..."
            value={newTask.description || ''}
            onChange={handleChange}
          />
          <button className="btn btn-info" type="submit">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}
