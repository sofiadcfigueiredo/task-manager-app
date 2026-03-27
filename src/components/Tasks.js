import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import TaskItem from './TaskItem';
import './Tasks.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const tasksPerPage = 20;

  const loadTasks = async () => {
    try {
      setLoading(true);
      const savedTasks = localStorage.getItem('tasks');
      
      if (savedTasks && JSON.parse(savedTasks).length > 0) {
        setTasks(JSON.parse(savedTasks));
      } else {
        const data = await TaskService.getTasks();
        setTasks(data);
        localStorage.setItem('tasks', JSON.stringify(data));
      }
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

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      text: newTaskTitle,
      description: newTaskDesc,
      completed: false
    };
    
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setNewTaskDesc('');
  };

  const updateTask = () => {
    if (!editingTask) return;
    
    const updatedTasks = tasks.map(task => 
      task.id === editingTask.id 
        ? { ...task, title: newTaskTitle, text: newTaskTitle, description: newTaskDesc }
        : task
    );
    
    setTasks(updatedTasks);
    setShowModal(false);
    setEditingTask(null);
    setNewTaskTitle('');
    setNewTaskDesc('');
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setNewTaskTitle(task.title || task.text);
    setNewTaskDesc(task.description || '');
    setShowModal(true);
  };

  const filteredTasks = tasks.filter(task => {
    const title = (task.title || task.text || '').toLowerCase();
    return title.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const currentTasks = filteredTasks.slice(start, end);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="text-center">
        <div className="spinner-border text-primary mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="pagination-info">Loading tasks...</p>
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
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="mb-0">My Tasks</h2>
        <div className="alert alert-secondary mb-0">
          Total: {filteredTasks.length} tasks
        </div>
      </div>

      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">🔍</span>
          <input
            type="text"
            className="win95-input"
            style={{ flex: 1, fontFamily: 'monospace' }}
            placeholder="Search tasks by title..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <button
              className="win95-button"
              onClick={() => setSearchTerm('')}
            >
              ✕ Clear
            </button>
          )}
        </div>
        {searchTerm && (
          <div className="text-muted mt-2 small">
            Showing {filteredTasks.length} result(s) for "{searchTerm}"
          </div>
        )}
      </div>

      <div className="win95-form">
        <h5 className="win95-form-title">Add New Task</h5>
        <div className="d-flex gap-2 flex-wrap">
          <input
            type="text"
            className="win95-input"
            style={{ width: '200px', fontFamily: 'monospace' }}
            placeholder="Task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
            type="text"
            className="win95-input"
            style={{ width: '300px', fontFamily: 'monospace' }}
            placeholder="Description (optional)..."
            value={newTaskDesc}
            onChange={(e) => setNewTaskDesc(e.target.value)}
          />
          <button
            className="win95-button"
            onClick={addTask}
          >
            + Add Task
          </button>
        </div>
      </div>

      <div className="tasks-list">
        {currentTasks.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>{searchTerm ? 'No tasks found.' : 'No tasks available'}</p>
            {!searchTerm && <small>Add a new task using the form above!</small>}
          </div>
        ) : (
          currentTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onEdit={openEditModal}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <button
            className="pagination-btn"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            className="pagination-btn"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">✏️ Edit Task</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={newTaskDesc}
                    onChange={(e) => setNewTaskDesc(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={updateTask}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
