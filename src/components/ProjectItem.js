import React, { Component } from 'react';

class ProjectItem extends Component {

    render() {
        return(
            <div className="project-item">
                <p onClick={this.props.changeProject}>{this.props.title}</p>
            </div>
        )
    }   
}

export default ProjectItem