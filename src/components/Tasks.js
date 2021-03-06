import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";

class Tasks extends Component {
  submitTask = e => {
    e.preventDefault();
    const { newtask } = e.target;
    let taskToAdd = {};
    taskToAdd = {
      id: Date.now(),
      title: newtask.value,
      completed: false
    };
    this.props.addTask(taskToAdd);
    e.target.reset();
  };

  submitDescription = e => {
    e.preventDefault();
    const { newdescription } = e.target;
    this.props.addDescription(newdescription.value);
  };

  check = taskId => {
    this.props.checkTask(taskId);
  };

  removeTask = taskId => {
    this.props.deleteTask(taskId);
  };

  removeMultipleTasks = tasks => {
    tasks.forEach(task => {
      this.props.deleteTask(task.id);
    });
  };

  removeProject = currentProject => {
    this.props.deleteProject(currentProject);
  };

  render() {
    const taskComponents = this.props.current.tasks.map(task => (
      <TaskItem
        text={task.title}
        id={task.id}
        checked={task.completed}
        onChange={this.check}
        removeTask={this.removeTask}
      />
    ));

    const incompleteTasks = this.props.current.tasks.filter(
      task => task.completed === false
    );
    const completeTasks = this.props.current.tasks.filter(
      task => task.completed === true
    );

    return (
      <div className="tasks">
        <h1>
          {this.props.current.title} {this.props.current.priority}
          <span class="date">
            {this.props.current.dueDate
              ? "Due: " + this.props.current.dueDate
              : null}
            <div>{incompleteTasks.length} Tasks remaining</div>
          </span>
        </h1>

        <h3>
          {this.props.current.description ? (
            this.props.current.description
          ) : (
            <form name="add-description" onSubmit={this.submitDescription}>
              <input
                type="text"
                placeholder="Add a description"
                name="newdescription"
              ></input>
            </form>
          )}
        </h3>

        {taskComponents}

        {this.props.current.title === "All Tasks" ? (null) : (
            <form className="new-task" onSubmit={this.submitTask} name="add-task">
              <label>
                +<input type="text" placeholder=" New Task" name="newtask"></input>
              </label>
            </form>
            
        )}

      {this.props.current.title === "All Tasks" ? (null) :
        (<div className="btns">
              <button onClick={() => this.removeProject(this.props.current.id)}>
                Delete Project
              </button>
              <button onClick={() => this.removeMultipleTasks(completeTasks)}>
                Remove Completed Tasks
              </button>
        </div>
        )}
      </div>
    );
  }
}

export default Tasks;
