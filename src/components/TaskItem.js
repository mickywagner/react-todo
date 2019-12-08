import React, { Component } from "react";

class TaskItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="task-item">
        <input type="checkbox" checked></input>

        <p> Item One</p>
      </div>
      
    );
  }
}

export default TaskItem;
