import React, { Component } from "react";

class TaskItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="task-item">
        <input 
          type="checkbox" 
          checked={this.props.checked}
        ></input>
        <p>{this.props.text}</p>
      </div>
      
    );
  }
}

export default TaskItem;
