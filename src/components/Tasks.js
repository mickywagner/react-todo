import React, { Component } from 'react';
import TaskItem from './TaskItem'

class Tasks extends Component {
    render() {
        return(
            <div className="tasks">
                <h1>
                    Tasks
                </h1>
                <TaskItem />
                <TaskItem />
                <TaskItem />
                
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