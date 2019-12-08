import React, { Component } from 'react';
import TaskItem from './TaskItem'
import items from './../index'


class Tasks extends Component {
    render() {
                
        return(
            <div className="tasks">
                <h1>
                    {this.props.todos[0].title}
                </h1>
                <h3>
                    {this.props.todos[0].description}
                </h3>
                
                <TaskItem
                    text={this.props.todos[0].tasks[0].title}
                />

                
                <form className="new-task">
                        <label>+
                        <input type="text" placeholder=" New Task"></input>
                        </label>
                </form> 
            </div>
        )
    }
}





export default Tasks