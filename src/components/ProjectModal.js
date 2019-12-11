import React, { Component } from "react";
import projectFactory from "./../projectFactory";

class ProjectModal extends Component { 
  closeModal = () => {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove("active");
    document.forms["create-project"].reset();
  };

  submitProject = (e) => {
    e.preventDefault();

    const { project, description, date, priority } = e.target
    const id = Date.now()
    const newProject = projectFactory(id, project.value, description.value, date.value, priority.value, [])
    this.props.addProject(newProject)

    this.closeModal()
};

  render() {
    return (
      <div className="modal-container">
        <div className="modal">
          <span onClick={this.closeModal}>[X]</span>
          <h1>New Project</h1>
          <form name="create-project" className="create-project" onSubmit={this.submitProject}>
            <input type="text" placeholder="Project" name="project" required></input>
            <input type="text" placeholder="Description" name="description"></input>
            <input type="date" name="date"></input>
            <select name="priority">
              <option disabled>Priority</option>
              <option>&#10030;</option>
              <option>&#10030; &#10030;</option>
              <option>&#10030; &#10030; &#10030;</option>
            </select>
            <button type="submit">
              Create Project
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
