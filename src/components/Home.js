import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container d-flex align-items-center justify-content-center min-vh-50">
      <div className="home-content text-center p-4">
        <h2 className="mb-3">Welcome to Task Manager</h2>
        <p className="mb-2">
          Your personal task management solution
        </p>
        <p className="mb-0">
          Click on Tasks menu to view and manage your tasks
        </p>
      </div>
    </div>
  );
}

export default Home;
