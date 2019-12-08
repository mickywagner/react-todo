import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import ProjectModal from './components/ProjectModal';
import userProject from './userProjects'

class App extends Component {
  constructor() {
    super()
    this.state = {
        todos: userProject
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <ProjectModal />
        <Projects todos={this.state.todos}/>
        <Tasks todos={this.state.todos}/>
      </div>
    );
  }

}

export default App;
