# 🗂️ Task Manager App

A task management application built with **React** featuring a nostalgic **Windows 95 retro theme**. It consumes a REST API to list tasks with status (Pending/Completed).

![React](https://img.shields.io/badge/React-18-blue)
![React Router](https://img.shields.io/badge/React_Router-6-blueviolet)
![Windows 95](https://img.shields.io/badge/Theme-Windows95-green)

---

## ✨ Features

- ✅ **Windows 95 Retro Theme** - Classic 3D borders, teal background, monospace fonts
- ✅ **Responsive design** - Works on desktop and mobile
- ✅ **Home Page** with welcome message
- ✅ **Tasks Page** displaying all tasks from the API
- ✅ **Auto-refresh** when opening the Tasks page
- ✅ **Visual status** (Green for Completed, Yellow for Pending)
- ✅ **SPA Navigation** with React Router
- ✅ **Front-end pagination** (20 tasks per page)
- ✅ **Real-time search** by task title

---

## 🚀 How to run the project

### Prerequisites

- Node.js 18+
- NPM 9+

### 1. Clone the API

```bash
git clone https://github.com/MarceloFonseca/tasks-api/
cd tasks-api
npm install
PORT=3008 NEW_TASK_PERIOD=60000 npm start
```

The API will be available at: http://localhost:3008/api/tasks

### 2. Clone and run the app

```bash
git clone https://github.com/sofiadcfigueiredo/task-manager-app.git
cd task-manager-app
npm install
npm start
```

The app will be available at: http://localhost:3000

---

## 📄 Pagination

The application implements **front-end pagination** to handle large volumes of tasks.

- **20 tasks per page**
- Navigation with "Previous" and "Next" buttons
- Displays total tasks and current page

> **To test pagination immediately** (without waiting for 20 tasks), change the `tasksPerPage` constant in `src/components/Tasks.js` to a smaller value, like `2`.

---

## 🔍 Search

The app allows real-time task search by title.

- **Instant filtering** as you type
- **Results counter**
- **Clear button** to reset the search
- **Pagination integration** - search results are automatically paginated

---

## 🗂️ Project Structure

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

## 🛠️ Technologies

- React 18
- React Router DOM
- Bootstrap 5
- Fetch API
- CSS3
- Jest (testes unitários)

---

## 🧪 Tests

The project includes 16 unit tests to ensure components and services work correctly.

```bash
npm test
```

---

##  🎨 Theme
The application features a complete **Windows 95 aesthetic**:

**Background:** Classic teal (#008080)
**Borders:** 3D raised/sunken effects
**Font:** Monospace (Courier New)
**Window Controls:** Minimize, Maximize, Close buttons
**Status Bar:**Classic "Ready" indicator

---

## 👩‍💻 Autora

**Sofia Figueiredo**  
[GitHub](https://github.com/sofiadcfigueiredo)
