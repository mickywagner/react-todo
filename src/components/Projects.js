import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

function createProject() {
    let modal = document.querySelector(".modal-container");
    modal.classList.add('active')
}

class Projects extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {   
        return(
            <div className="projects">
                <h1>Projects</h1>
                
                {/* <ProjectItem /> */}
            
                <button onClick={createProject}>Add Project</button>
            </div>
        )
    }

}


export default Projects