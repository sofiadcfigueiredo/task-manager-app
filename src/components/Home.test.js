import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Componente Home', () => {
  test('deve renderizar o título principal', () => {
    render(<Home />);
    const title = screen.getByText(/Welcome to Task Manager/i);
    expect(title).toBeInTheDocument();
  });

  test('deve renderizar o texto de boas-vindas', () => {
    render(<Home />);
    const welcomeText = screen.getByText(/Your personal task management solution/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('deve renderizar o link para Tasks', () => {
    render(<Home />);
    const tasksLink = screen.getByText(/Click on Tasks menu/i);
    expect(tasksLink).toBeInTheDocument();
  });
});
