import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
          onChange={() => { this.props.onChange(this.props.id) }}
        ></input>
        <ul>
          <li style={this.props.checked ? completedStyle : null } id={this.props.id} >
            {this.props.text} 
            <FontAwesomeIcon
              icon={faTrashAlt} 
              onClick={(e)=> this.props.removeTask(e.currentTarget.parentElement.id)}/>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default TaskItem;

