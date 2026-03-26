import React from 'react';
import './TaskItem.css';

function TaskItem({ task }) {
  const getStatusClass = (completed) => {
    return completed ? 'status-completed' : 'status-pending';
  };

  const getStatusText = (completed) => {
    return completed ? 'Completed' : 'Pending';
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3 className="task-title">{task.title || task.text}</h3>
        <span className={`task-status ${getStatusClass(task.completed)}`}>
          {getStatusText(task.completed)}
        </span>
      </div>
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      <div className="task-meta">
        <span className="task-id">ID: {task.id}</span>
      </div>
    </div>
  );
}

export default TaskItem;
