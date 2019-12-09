import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {
    createProject() {
        let modal = document.querySelector(".modal-container");
        modal.classList.add('active')
    }

    render() {   
        const projectsComponents = this.props.todos.map(todo =>
            <ProjectItem 
                key={todo.id}
                title={todo.title}
                description={todo.description}
                priority={todo.priority}
                tasks={todo.tasks}
                changeProject={this.props.changeProject}
            />
        )

        return(
            <div className="projects">
                <h1>Projects</h1>
                
               {projectsComponents}
            
                <button onClick={this.createProject}>Add Project</button>
            </div>
        )
    }

}


export default Projects