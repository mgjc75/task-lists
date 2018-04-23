import React, { Component } from "react";
import PT from "prop-types";
import "./css/task.css";

class Task extends Component {
  render() {
    const { tasks, isStorageEmpty } = this.props;
    console.log(tasks, isStorageEmpty);
    if (isStorageEmpty) {
      return <div className="list-group-item">No tasks</div>;
    } else {
      return (
        <div className="list-group">
          {tasks.map((task, index) => {
            return (
              <div
                key={`${index}task`}
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <span className="col">
                    <span className="text-left text-primary">
                      {task.category}
                    </span>
                    <span className="text-info pl-2">{task.title}</span>
                  </span>
                  <span className="col-sm-2 text-right">
                    <i className="fas fa-check-circle p-1 text-success fa-15" />
                    <i
                      id={index}
                      className="far fa-trash-alt text-danger p-1 fa-15"
                      onClick={this.handleClick}
                    />
                  </span>
                </div>
                <span className="col">{task.description}</span>
              </div>
            );
          })}
        </div>
      );
    }
  }

  handleClick = event => {
    const index = event.target.id;
    this.props.deleteTask(index);
  };

  static propTypes = {
    tasks: PT.array.isRequired,
    isStorageEmpty: PT.bool.isRequired
  };
}

export default Task;
