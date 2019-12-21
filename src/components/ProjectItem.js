import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class ProjectItem extends Component {

    testFunc = (e) => {
        e.stopPropagation()
        const modal = document.querySelector("#edit-project")
        modal.classList.add("active")
        this.props.setEdit(e.target.parentElement.id)
    }

    render() {
        return(
            <div className="project-item">
                <p onClick={this.props.changeProject} id={this.props.id}>{this.props.title} <span className="svg-wrapper" onClick={this.testFunc}><FontAwesomeIcon icon={faEdit}/></span></p>
            </div>
        )
    }   
}

export default ProjectItem