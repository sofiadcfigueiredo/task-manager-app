import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import TaskItem from './TaskItem';
import './Tasks.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const tarefasPorPagina = 20;

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

  const totalPaginas = Math.ceil(tasks.length / tarefasPorPagina);
  const inicio = (paginaAtual - 1) * tarefasPorPagina;
  const fim = inicio + tarefasPorPagina;
  const tarefasAtuais = tasks.slice(inicio, fim);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">My Tasks</h2>
        <div className="alert alert-secondary mb-0">
          Total: {tasks.length} tarefas
        </div>
      </div>

      <div className="tasks-list">
        {tarefasAtuais.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No tasks available</p>
            <small>New tasks will appear every minute</small>
          </div>
        ) : (
          tarefasAtuais.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </div>

      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <button
            className="btn btn-outline-primary"
            onClick={paginaAnterior}
            disabled={paginaAtual === 1}
          >
            ← Anterior
          </button>

          <span className="text-muted">
            Página {paginaAtual} de {totalPaginas}
          </span>

          <button
            className="btn btn-outline-primary"
            onClick={proximaPagina}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}

export default Tasks;