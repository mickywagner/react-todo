import React, { Component } from 'react'

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <h1>Projects</h1>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
                <button>Add Project</button>
            </div>
        )
    }

}

let projects = []

export default Projects