import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Tasks extends Component {
    submitTask = (e) => {
        e.preventDefault()
        const { newtask } = e.target
        let taskToAdd = {}
        taskToAdd = {
            id: Date.now(),
            title: newtask.value,
            completed: false
        }
        this.props.addTask(taskToAdd)
        e.target.reset()
    }

    check = (taskText) => {
        this.props.checkTask(taskText)
    }

    removeTask = (taskText) => {
      this.props.deleteTask(taskText)
    }
  
    render() {
    const taskComponents = this.props.current.tasks.map(task => (
      <TaskItem text={task.title} key={task.id} checked={task.completed} onChange={this.check} removeTask={this.removeTask}/>
    ));

    return (
      <div className="tasks">
        <h1>{this.props.current.title}<span class="date">Due: {this.props.current.dueDate}<div>0 Tasks remaining</div></span></h1>
        <h3>{this.props.current.description ? this.props.current.description : <input type="text" placeholder="Add a description" name="description"></input>}</h3>

        {taskComponents}

        <form className="new-task" onSubmit={this.submitTask} name="add-task">
          <label>
            +<input type="text" placeholder=" New Task" name="newtask"></input>
          </label>
        </form>
        <div className="btns">
          <button onClick={() => console.log(this.props.current)}>Delete Project</button>
          <button onClick={() => console.log('remove complete tasks')}>Remove Completed Tasks</button>
        </div>
        
      </div>
    );
  }
}

export default Tasks;
