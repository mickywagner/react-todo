import React, { Component } from "react";
import projectFactory from './../projectFactory'

function closeModal() {
    const modal = document.querySelector('.modal-container')
    modal.classList.remove('active')
}

function createProject(e) {
    e.preventDefault()
    projectFactory()
    closeModal()
}

function ProjectModal() {
  return (
    <div className="modal-container">
      <div className="modal">
        <span onClick={closeModal}>[X]</span>
        <h1>New Project</h1>
        <form className="create-project">
          <input type="text" placeholder="Project" required></input>
          <input type="text" placeholder="Description"></input>
          <button type="submit" onClick={createProject}>Create Project</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectModal