import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <div className="window-controls">
            <button className="window-btn">_</button>
            <button className="window-btn">□</button>
            <button className="window-btn">✕</button>
          </div>
          <h1 className="main-title">Task Manager</h1>
          <div className="window-controls-placeholder"></div>
        </div>

        <div className="layout">
          <nav className="sidebar">
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" className="menu-link">🏠 Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/tasks" className="menu-link">📋 Tasks</Link>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </main>
        </div>

        <div className="status-bar">
          <span>Ready</span>
          <span>Task Manager</span>
        </div>
      </div>
    </Router>
  );
}

export default App;
