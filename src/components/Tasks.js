import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Tasks extends Component {
  render() {
    const taskComponents = this.props.current.tasks.map(task => (
      <TaskItem text={task.title} key={task.id} checked={task.completed} />
    ));

    return (
      <div className="tasks">
        <h1>{this.props.current.title}</h1>
        <h3>{this.props.current.description}</h3>

        {taskComponents}

        <form className="new-task">
          <label>
            +<input type="text" placeholder=" New Task"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Tasks;
