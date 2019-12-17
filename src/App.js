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
        todos: updatedProject,
        current: updatedProject[updatedProject.length - 1]
      }
    })
  }

  changeProject = (e) => { 
      let selectedTab = this.state.todos.find(index => Number(index.id) === Number(e.target.id))
      this.setState({
        current: selectedTab
      })
  }
  

  addTask = (item) => {
    this.setState(prevState => {
      const updatedCurrent = prevState.current
      updatedCurrent.tasks.push(item)
      setLocalStorage(prevState.todos)
      return {
        todos: prevState.todos,
        current: updatedCurrent
      }
    })
  }

  deleteTask = (item) => {
    this.setState(prevState => {
      const updatedCurrent = prevState.current
      const deletedTask = updatedCurrent.tasks.find(task => Number(task.id) === Number(item))
      const taskIndex = updatedCurrent.tasks.indexOf(deletedTask)
      updatedCurrent.tasks.splice(taskIndex, 1)
      setLocalStorage(prevState.todos)
      return {
        todos: prevState.todos,
        current: updatedCurrent
      }
    })
  }
 
  checkTask = (task) => {
    this.setState(prevState => {
      const updateCompleted = prevState.current.tasks
      const foundTask = updateCompleted.find(item => Number(item.id) === Number(task))
      foundTask.completed = !foundTask.completed
      setLocalStorage(prevState.todos)
      return {
        todos: prevState.todos
      }
    })
  }

  deleteProject = (project) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos
      const deletedProject = updatedTodos.find(todo => Number(todo.id) === Number(project))
      const index = updatedTodos.indexOf(deletedProject)
      updatedTodos.splice(index, 1)
      setLocalStorage(prevState.todos)
      if(updatedTodos.length < 1) {
        return {
          todos: [],
          current: []
        }
      } else {
        return {
          todos: updatedTodos,
          current: updatedTodos[index - 1]
        }
      }
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
        {this.state.todos.length > 0 ? 
          <Tasks 
          todos={this.state.todos} 
          current={this.state.current}
          addTask={this.addTask}
          checkTask={this.checkTask}
          deleteTask={this.deleteTask}
          deleteProject={this.deleteProject}
        /> : null
        }
        
      </div>
    );
  }

}

export default App;
