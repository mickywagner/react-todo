import React from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import ProjectModal from './components/ProjectModal';

function App() {
  return (
    <div className="container">
      <Header />
      <ProjectModal />
      <Projects />
      <Tasks />
    </div>
  );
}

export default App;
