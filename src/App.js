import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <header className="bg-white shadow-sm py-4 text-center">
          <h1 className="main-title">Task Manager</h1>
        </header>

        <div className="container my-4">
          <div className="row g-4">
            <nav className="col-md-3 col-lg-2">
              <div className="custom-sidebar">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/" className="custom-nav-link">🏠 Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tasks" className="custom-nav-link">📋 Tasks</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 col-lg-10">
              <div className="custom-main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tasks" element={<Tasks />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;