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
        todos: userProject,
        current: userProject[0]
    }
  }

  addProject = () => {
    this.setState({
      todos: userProject
    })
    console.log(this.state.current)
  }

  changeProject = (e) => {
    if(e.target.innerHTML !== this.state.current.title) {
      let loser = this.state.todos.find(index => index.title === e.target.innerHTML)
      console.log(loser)
      console.log(this.state.todos)
      this.setState({
        current: loser
      })
    }
  }

  addTask = () => {
    console.log('I will add you to the state')
  }


  render() {
    return (
      <div className="container">
        <Header />
        <ProjectModal 
          addProject={this.addProject}
          todos={this.state.todos} 
          current={this.state.current} 
        />
        <Projects 
          todos={this.state.todos} 
          current={this.state.current} 
          changeProject={this.changeProject}
        />
        <Tasks 
          todos={this.state.todos} 
          current={this.state.current}
          addTask={this.addTask}
        />
      </div>
    );
  }

}

export default App;
