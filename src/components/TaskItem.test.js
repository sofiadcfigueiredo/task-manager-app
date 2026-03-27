import { render, screen } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('Componente TaskItem', () => {
  const mockTask = {
    id: 1,
    title: 'Tarefa de teste',
    description: 'Descrição da tarefa',
    completed: false
  };

  test('deve renderizar o título da tarefa', () => {
    render(<TaskItem task={mockTask} />);
    const title = screen.getByText(/Tarefa de teste/i);
    expect(title).toBeInTheDocument();
  });

  test('deve renderizar o ID da tarefa', () => {
    render(<TaskItem task={mockTask} />);
    const id = screen.getByText(/ID: 1/i);
    expect(id).toBeInTheDocument();
  });

  test('deve mostrar status "Pending" quando completed for false', () => {
    render(<TaskItem task={mockTask} />);
    const status = screen.getByText(/Pending/i);
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('status-pending');
  });

  test('deve mostrar status "Completed" quando completed for true', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} />);
    const status = screen.getByText(/Completed/i);
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('status-completed');
  });

  test('deve renderizar a descrição quando existir', () => {
    render(<TaskItem task={mockTask} />);
    const description = screen.getByText(/Descrição da tarefa/i);
    expect(description).toBeInTheDocument();
  });

  test('não deve renderizar descrição quando não existir', () => {
    const taskWithoutDesc = { id: 2, title: 'Sem descrição', completed: false };
    render(<TaskItem task={taskWithoutDesc} />);
    expect(screen.getByText('Sem descrição')).toBeInTheDocument();
    const possibleDescription = screen.queryByText(/Descrição da tarefa/i);
    expect(possibleDescription).not.toBeInTheDocument();
  });
});
