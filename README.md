# 🗂️ Task Manager App

Uma aplicação de gerenciamento de tarefas construída com **React**, que consome uma API REST para listar tarefas com status (Pending/Completed).

![React](https://img.shields.io/badge/React-18-blue)
![React Router](https://img.shields.io/badge/React_Router-6-blueviolet)
![Status](https://img.shields.io/badge/status-complete-brightgreen)

---

## ✨ Funcionalidades

- ✅ **Página Home** com mensagem de boas-vindas
- ✅ **Página Tasks** que exibe todas as tarefas da API
- ✅ **Atualização automática** ao abrir a página de tarefas
- ✅ **Status visual** (Pending / Completed) para cada tarefa
- ✅ **Design responsivo** com gradiente e cards
- ✅ **Navegação SPA** com React Router
- ✅ **Paginação no front-end** (20 tarefas por página)
- ✅ **Busca em tempo real** por título de tarefa

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js 18+
- NPM 9+

### 1. Clone a API

```bash
git clone https://github.com/MarceloFonseca/tasks-api/
cd tasks-api
npm install
PORT=3008 NEW_TASK_PERIOD=60000 npm start
```

A API estará disponível em: `http://localhost:3008/api/tasks`

### 2. Clone e execute o app

```bash
git clone https://github.com/sofiadcfigueiredo/task-manager-app.git
cd task-manager-app
npm install
npm start
```

O app estará disponível em: `http://localhost:3000`

---

## 📄 Paginação

O aplicativo implementa **paginação no front-end** para lidar com um grande volume de tarefas.

- **20 tarefas por página**
- Navegação com botões "Anterior" e "Próximo"
- Exibe total de tarefas e página atual

> **Para testar a paginação imediatamente** (sem aguardar 20 tarefas), altere a constante `tarefasPorPagina` no arquivo `src/components/Tasks.js` para um valor menor, como `2`.

---

## 🔍 Busca

O aplicativo permite buscar tarefas por título em tempo real.

- **Filtro instantâneo** enquanto digita
- **Contador de resultados**
- **Botão "Limpar"** para resetar a busca
- **Integração com paginação**

---

## 🗂️ Estrutura do projeto

```
task-manager-app/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Tasks.js
│   │   ├── Tasks.css
│   │   ├── TaskItem.js
│   │   └── TaskItem.css
│   ├── services/
│   │   └── TaskService.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias

- React 18
- React Router DOM
- Bootstrap 5
- Fetch API
- CSS3
- Jest (testes unitários)

---

## 🧪 Testes

O projeto inclui 16 testes unitários para garantir o funcionamento correto dos componentes e serviços.

```bash
npm test
```

---

## 👩‍💻 Autora

**Sofia Figueiredo**  
[GitHub](https://github.com/sofiadcfigueiredo)
