import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import ProjectModal from './components/ProjectModal';
import userProject from './userProjects'
import setLocalStorage from './setLocalStorage'
import EditProjectModal from './components/EditProjectModal';


class App extends Component {
  constructor() {
    super()
    this.state = {
        todos: userProject,
        current: userProject[0],
        edit: []
    }
    this.setEdit = this.setEdit.bind(this)
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

  allTasks = (tasksAll) => {
    this.setState( prevState => {
      const newCurrent = 
            {
              id: 19,
              title: "All Tasks",
              description: "combined tasks",
              dueDate: "",
              priority: "✮ ✮ ✮",
              tasks: tasksAll
            }
      return {
        current: newCurrent
      }
    })
  }

  changeProject = (e) => { 
      let selectedTab = this.state.todos.find(index => Number(index.id) === Number(e.target.id))
      this.setState({
        current: selectedTab
      })
  }

  addDescription = (description) => {
    this.setState(prevState => {
      const updatedCurrent = prevState.current
      updatedCurrent.description = description
      return {
        todos: prevState.todos,
        current: updatedCurrent
      }
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
      const updatedTodos = [...prevState.todos]
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

  setEdit = (id) => {
    this.setState(prevState => {
      const newArray = [...prevState.todos]
      const match = newArray.find(todo => Number(todo.id) === Number(id))
      return {
        edit: match
      }
    })
  }

  changeEdit = (value, name) => {
    this.setState(prevState => {
      let newEdit = {...prevState.edit}
      newEdit[name] = value
      return {
        edit: newEdit
      }
    })
  }

  editProject = (title, description, dueDate, priority) => {
    this.setState(prevState => {
      const newTodos = [...prevState.todos]
      const newEdit = {...prevState.edit}
      let match = newTodos.find(todo => Number(todo.id) === newEdit.id)
      let index = newTodos.indexOf(match)
      match.title = title
      match.description = description
      match.dueDate = dueDate
      match.priority = priority
      newTodos[index] = match
      return {
        todos: newTodos
      }
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          todos={this.state.todos}
          displayAll={this.allTasks}
        />
        <ProjectModal 
          addProject={this.addProject}
          todos={this.state.todos} 
          current={this.state.current} 
        />
  
        <Projects 
          todos={this.state.todos} 
          current={this.state.current} 
          changeProject={this.changeProject}
          setEdit={this.setEdit}
        />
        <EditProjectModal 
          edit={this.state.edit}
          changeEdit={this.changeEdit}
          editProject={this.editProject}
        />

        {this.state.todos.length > 0 ? 
          <Tasks 
          todos={this.state.todos} 
          current={this.state.current}
          addTask={this.addTask}
          checkTask={this.checkTask}
          deleteTask={this.deleteTask}
          deleteProject={this.deleteProject}
          addDescription={this.addDescription}
        /> : null
        }
        
      </div>
    );
  }

}

export default App;
