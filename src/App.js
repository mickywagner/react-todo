import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import ProjectModal from './components/ProjectModal';
import userProject from './userProjects'
import setLocalStorage from './setLocalStorage'


class App extends Component {
  constructor() {
    super()
    this.state = {
        todos: userProject,
        current: userProject[0]
    }
  }

  componentDidMount() {
    const savedProjects = JSON.parse(localStorage.getItem('savedProjects'))
    if(savedProjects) {
      this.setState({
        todos: savedProjects,
        current: savedProjects[0]
      })
    } else {
      setLocalStorage(userProject)
      this.setState({
        todos: userProject,
        current: userProject[0]
      })
    }
  }

  addProject = (newProject) => {
    this.setState(prevState => {
      const updatedProject = prevState.todos
      updatedProject.push(newProject)
      setLocalStorage(updatedProject)
      return {
        todos: updatedProject
      }
    })
  }

  changeProject = (e) => {
    if(e.target.innerHTML !== this.state.current.title) {
      let selectedTab = this.state.todos.find(index => index.title === e.target.innerHTML)
      this.setState({
        current: selectedTab
      })
    }
  }

  addTask = (item) => {
     let current = this.state.current.tasks
     current.push(item)
     this.setState({
       todos: userProject
     })
  }

  checkTask = (task) => {
    let current = this.state.current.tasks
    let foundTask = current.find(item => item.title === task)
    foundTask.completed = !foundTask.completed
    this.setState({
      todos: userProject
    })
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
          checkTask={this.checkTask}
        />
      </div>
    );
  }

}

export default App;
