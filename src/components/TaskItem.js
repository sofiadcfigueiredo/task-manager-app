import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
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
        <div className="task-actions">
          <button
            className="edit-btn"
            onClick={() => onEdit(task)}
          >
            ✏️ Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            🗑️ Delete
          </button>
          <span className={`task-status ${getStatusClass(task.completed)}`}>
            {getStatusText(task.completed)}
          </span>
          {!task.completed && (
            <button
              className="status-btn"
              onClick={() => onToggleComplete(task.id)}
            >
              ✓ Mark Complete
            </button>
          )}
        </div>
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
