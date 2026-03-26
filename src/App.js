import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Task Manager</h1>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tasks">Tasks</Link></li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
