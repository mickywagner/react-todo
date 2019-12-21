import React, { Component } from 'react';

class EditProjectModal extends Component {
    closeModal = () => {
        const modal = document.querySelector("#edit-project");
        modal.classList.remove("active");
    };

    submitProject = (e) => {
      e.preventDefault();
  
      const { project, description, date, priority } = e.target

      console.log(project.value)
  
      this.closeModal()
  };

  handleChange = (e) => {
    this.handleChange(e)
  }

    render() {
        return(
            <div className="modal-container" id="edit-project">
            <div className="modal">
              <span onClick={this.closeModal}>[X]</span>
              <h1>Edit Project</h1>
              <form name="edit-project" className="edit-project" onSubmit={this.submitProject}>
                <input type="text" value={this.props.edit.title} name="project" onChange={(e) => this.handleChange}></input>
                <input type="text" value={this.props.edit.description} name="description" onChange={(e) => this.handleChange}></input>
                <input type="date" name="date"></input>
                <select name="priority">
                  <option disabled>Priority</option>
                  <option>&#10030;</option>
                  <option>&#10030; &#10030;</option>
                  <option>&#10030; &#10030; &#10030;</option>
                </select>
                <button type="submit">
                    Save Changes
                </button>
              </form>
            </div>
          </div>
        )

    }
    
}

export default EditProjectModal