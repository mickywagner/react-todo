import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const completedStyle = {
      color: '#cdcdcd',
      fontStyle: 'italic',
      textDecoration: 'line-through'
    }
    
    return (
      <div className="task-item">
        <input 
          type="checkbox" 
          checked={this.props.checked}
          onChange={() => { this.props.onChange(this.props.text)}}
        ></input>
        <p style={this.props.checked ? completedStyle : null }>{this.props.text}</p>
      </div>
      
    );
  }
}

export default TaskItem;
