import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    completed: false
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <label className="col-form-label" htmlFor="title">
            Task title
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="title..."
            onChange={this.handleTitle}
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task description</label>
          <textarea
            id="description"
            rows="6"
            className="form-control"
            placeholder="description..."
            onChange={this.handleDescription}
            value={this.state.description}
          />
        </div>
        <div className="form-group">
          <select
            id="category"
            className="form-control"
            onChange={this.handleCategory}
            value={this.state.category}
          >
            <option defaultValue>Category</option>
            <option value="1">Personal</option>
            <option value="2">Work</option>
            <option value="3">TVR</option>
          </select>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
      </form>
    );
  }

  handleClick = () => {
    const { title, description, category } = this.state;
    const newTask = {
      title: title,
      description: description,
      category: category,
      completed: false
    };
    this.setState({
      title: "",
      description: "",
      category: "",
      completed: false,
      tasks: newTask
    });
    this.props.addTask(title, description, category);
  };

  handleTitle = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleDescription = event => {
    const description = event.target.value;
    this.setState({
      description: description
    });
  };

  handleCategory = event => {
    const category = event.target.options[event.target.selectedIndex].text;
    this.setState({ category: category });
  };
}

export default Form;
