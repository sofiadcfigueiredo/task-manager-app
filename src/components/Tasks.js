import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import TaskItem from './TaskItem';
import './Tasks.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await TaskService.getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks. Please make sure the API is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="text-center">
        <div className="spinner-border text-primary mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted">Loading tasks...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="text-center py-5">
      <div className="alert alert-danger shadow-sm">{error}</div>
      <button className="btn btn-primary" onClick={loadTasks}>
        Retry
      </button>
    </div>
  );

  return (
    <div>
      <h2 className="mb-3">My Tasks</h2>
      <div className="alert alert-secondary mb-4 shadow-sm">
        <i className="bi bi-list-check"></i> Total tasks: {tasks.length}
      </div>
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No tasks available</p>
            <small>New tasks will appear every minute</small>
          </div>
        ) : (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default Tasks;