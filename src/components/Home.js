import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Task Manager</h2>
        <p className="text-secondary fs-5">
          Your personal task management solution
        </p>
        <p className="text-muted">
          Click on Tasks menu to view and manage your tasks
        </p>
      </div>
    </div>
  );
}

export default Home;