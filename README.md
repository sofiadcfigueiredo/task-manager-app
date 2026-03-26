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
│   └── App.css
└── package.json
```

---

## 🛠️ Tecnologias

- React 18
- React Router DOM
- Fetch API
- CSS3

---

## 👩‍💻 Autora

**Sofia Figueiredo**  
[GitHub](https://github.com/sofiadcfigueiredo)
