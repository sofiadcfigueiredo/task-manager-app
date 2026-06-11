const API_URL = 'http://localhost:3008/api/tasks';

class TaskService {
  static async getTasks() { // Função que busca tarefas da API
    try {
      const response = await fetch(API_URL); // Função nativa do Js que faz uma requisição GET para a API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Converte a resposta em JSON
      return data;
    } catch (error) { // Tratamento de erros
      console.error('API call failed:', error); 
      throw error;
    }
  }
}

export default TaskService;
