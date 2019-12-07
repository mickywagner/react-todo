import React from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Tasks from './components/Tasks'

function App() {
  return (
    <div class="container">
      <Header />
      <Projects />
      <Tasks />
    </div>
  );
}

export default App;
