const API_URL = 'http://localhost:3008/api/tasks';

class TaskService {
  static async getTasks() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }
}

export default TaskService;
