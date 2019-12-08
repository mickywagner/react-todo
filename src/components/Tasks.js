import React, { Component } from 'react';
import TaskItem from './TaskItem'
import items from './../index'


class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            todos: items
        }
    }

    render() {

        const taskComponents = this.state.todos.map(item => <TaskItem key={item.id} text={item.text} completed={item.completed} />)
        
        return(
            <div className="tasks">
                <h1>
                    Tasks
                </h1>
                
                {taskComponents}

                
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