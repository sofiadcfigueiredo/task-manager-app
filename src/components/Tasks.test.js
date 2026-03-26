import { render, screen, waitFor } from '@testing-library/react';
import Tasks from './Tasks';
import TaskService from '../services/TaskService';

jest.mock('../services/TaskService');

const mockTasks = [
  { id: 1, title: 'Task 1', description: 'Desc 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Desc 2', completed: true }
];

describe('Componente Tasks', () => {
  beforeEach(() => {
    TaskService.getTasks.mockClear();
  });

  test('deve mostrar loading enquanto carrega', () => {
    TaskService.getTasks.mockImplementation(() => new Promise(() => {}));
    render(<Tasks />);
    expect(screen.getByText(/Loading tasks/i)).toBeInTheDocument();
  });

  test('deve mostrar tarefas após carregar', async () => {
    TaskService.getTasks.mockResolvedValue(mockTasks);
    render(<Tasks />);
    
    await waitFor(() => {
      expect(screen.getByText('My Tasks')).toBeInTheDocument();
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
      expect(screen.getByText('Total tasks: 2')).toBeInTheDocument();
    });
  });

  test('deve mostrar mensagem de erro quando API falha', async () => {
    TaskService.getTasks.mockRejectedValue(new Error('API Error'));
    render(<Tasks />);
    
    await waitFor(() => {
      expect(screen.getByText(/Failed to load tasks/i)).toBeInTheDocument();
      expect(screen.getByText('Retry')).toBeInTheDocument();
    });
  });

  test('deve mostrar mensagem quando não há tarefas', async () => {
    TaskService.getTasks.mockResolvedValue([]);
    render(<Tasks />);
    
    await waitFor(() => {
      expect(screen.getByText(/No tasks available/i)).toBeInTheDocument();
    });
  });
});
