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
                id={todo.id}
                title={todo.title}
                description={todo.description}
                priority={todo.priority}
                tasks={todo.tasks}
                changeProject={this.props.changeProject}
            />
        )

        return(
            <div className="projects">
                <h1>Projects<span class="mobile-project-add"><button onClick={this.createProject}>Add Project</button></span></h1>
                
                <div class="projects-container">
                 {projectsComponents}
            
                    <button onClick={this.createProject}>Add Project</button>
                </div>
            </div>
        )
    }

}


export default Projects