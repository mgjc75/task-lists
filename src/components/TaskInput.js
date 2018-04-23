import React, { Component } from "react";
import Form from "./Form";
import PT from "prop-types";

class TaskInput extends Component {
  render() {
    const { addTask } = this.props;
    return (
      <div className="card border-dark m-2">
        <div className="card-header bg-transparent border-dark h-100">
          New Task
        </div>
        <div className="card-body">
          <Form addTask={addTask} />
        </div>
      </div>
    );
  }

  static propTypes = {
    addTask: PT.func.isRequired
  };
}

export default TaskInput;
