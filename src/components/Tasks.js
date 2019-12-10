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
  
    render() {
    const taskComponents = this.props.current.tasks.map(task => (
      <TaskItem text={task.title} key={task.id} checked={task.completed} onChange={this.check}/>
    ));

    return (
      <div className="tasks">
        <h1>{this.props.current.title}</h1>
        <h3>{this.props.current.description}</h3>

        {taskComponents}

        <form className="new-task" onSubmit={this.submitTask} name="add-task">
          <label>
            +<input type="text" placeholder=" New Task" name="newtask"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Tasks;
