import React, { Component } from "react";
import PT from "prop-types";
import Task from "./Task";

class TaskList extends Component {
  render() {
    const { tasks, isStorageEmpty, deleteTask, filterTaskList } = this.props;
    return (
      <div className="card border-dark m-2">
        <div className="card-header text-dark bg-light border-dark ">
          <div className="row">
            <span className="col"> Task List</span>
            <span className="col-2">
              <select
                id="category"
                className="form-control form-control-sm"
                onChange={this.handleClick}
              >
                <option defaultValue>Category</option>
                <option value="1">Personal</option>
                <option value="2">Work</option>
                <option value="3">TVR</option>
              </select>
            </span>
          </div>
        </div>
        <div className="card-body text-success p-0">
          <Task
            tasks={tasks}
            isStorageEmpty={isStorageEmpty}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    );
  }

  handleClick = event => {
    const category = event.target.options[event.target.selectedIndex].text;
    this.props.filterTaskList(category);
  };

  static propTypes = {
    tasks: PT.array.isRequired,
    isStorageEmpty: PT.bool.isRequired
  };
}

export default TaskList;
