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
    <div className="custom-task-item">
      <div className="task-header">
        <h5 className="task-title">{task.title || task.text}</h5>
        <span className={`task-status ${getStatusClass(task.completed)}`}>
          {getStatusText(task.completed)}
        </span>
      </div>
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      <div className="task-meta">
        ID: {task.id}
      </div>
    </div>
  );
}

export default TaskItem;
