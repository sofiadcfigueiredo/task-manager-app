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

  if (loading) return <div className="loading">Loading tasks...</div>;
  if (error) return (
    <div>
      <div className="error">{error}</div>
      <button onClick={loadTasks}>Retry</button>
    </div>
  );

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>
      <div className="tasks-stats">Total tasks: {tasks.length}</div>
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <div>No tasks available</div>
        ) : (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default Tasks;
