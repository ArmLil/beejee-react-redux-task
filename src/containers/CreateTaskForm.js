import React from "react";

class FormTask extends React.Component {
  state = {
    email: "",
    username: "",
    text: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { createNewTask } = this.props;
    const { email, username, text } = this.state;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("text", text);
    createNewTask(formData);
  };

  render() {
    const { email, username, text } = this.state;
    return (
      <div className="popup">
        <h5 className="col-7 text-danger">Create New Task</h5>
        <div className="row">
          <div className="col-3">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              className="form-control"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-3">
            <label htmlFor="username">Name</label>
            <input
              required
              id="username"
              name="username"
              type="text"
              placeholder="@username"
              className="form-control"
              value={username}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6">
            <label htmlFor="task">Task</label>
            <textarea
              required
              id="TaskArea"
              name="text"
              className="form-control"
              rows="2"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="m-4">
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTask;
