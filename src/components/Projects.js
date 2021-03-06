import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import createProject from './../createProject'

class Projects extends Component {
    

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
                setEdit = {this.props.setEdit}
            />
        )

        return(
            <div className="projects">
                <h1>Projects<span class="mobile-project-add"><button onClick={this.createProject}>Add Project</button></span></h1>
                
                <div class="projects-container">
                 {projectsComponents}
            
                    <button onClick={createProject}>Add Project</button>
                </div>
            </div>
        )
    }

}


export default Projects