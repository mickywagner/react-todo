import React, { Component } from 'react';

class Tasks extends Component {
    render() {
        return(
            <div className="tasks">
                <h1>
                    Tasks
                </h1>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
                <form className="new-task">
                        <input type="text" placeholder="+ New Task"></input>
                </form> 
            </div>
        )
    }
}

export default Tasks