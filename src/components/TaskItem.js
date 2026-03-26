import React from 'react';
import './TaskItem.css';

function TaskItem({ task }) {
  const getStatusClass = (completed) => {
    return completed ? 'bg-success text-white' : 'bg-warning text-dark';
  };

  const getStatusText = (completed) => {
    return completed ? 'Completed' : 'Pending';
  };

  return (
    <div className="custom-task-item">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <h5 className="mb-0">{task.title || task.text}</h5>
        <span className={`badge ${getStatusClass(task.completed)} px-3 py-2 rounded-pill`}>
          {getStatusText(task.completed)}
        </span>
      </div>
      {task.description && (
        <p className="text-secondary mt-2 mb-2">{task.description}</p>
      )}
      <div className="d-flex justify-content-between align-items-center mt-2">
        <small className="text-muted">
          <i className="bi bi-hash"></i> ID: {task.id}
        </small>
      </div>
    </div>
  );
}

export default TaskItem;