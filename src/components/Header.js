import React from 'react';
import openModal from './../createProject'
import getTasks from '../getAllTasks';

const Header = (props) => {
    return(
        <header>
            <h1>ToDo App</h1>
            <button onClick={openModal}>Add Project</button>
            <button onClick={() => props.displayAll(getTasks(props.todos))}>All Tasks</button>
        </header>
    )
}

export default Header 