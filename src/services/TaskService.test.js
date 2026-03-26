import TaskService from './TaskService';

global.fetch = jest.fn();

describe('TaskService', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('deve buscar tarefas com sucesso', async () => {
    const mockTasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks
    });

    const tasks = await TaskService.getTasks();
    expect(tasks).toEqual(mockTasks);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3008/api/tasks');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('deve lançar erro quando a API falha', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    await expect(TaskService.getTasks()).rejects.toThrow();
  });

  test('deve lançar erro quando fetch falha', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(TaskService.getTasks()).rejects.toThrow('Network error');
  });
});
