import React, { Component } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

class Tasks extends Component {
  state = {
    tasks: [],
    isStorageEmpty: true
  };

  componentDidMount() {
    const localTaskStorage = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage.tasks) {
      this.setState({ tasks: [...localTaskStorage], isStorageEmpty: false });
    }
  }

  render() {
    const { tasks, isStorageEmpty } = this.state;
    return (
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-sm-3 p-0 m-0">
            <TaskInput addTask={this.addTask} />
          </div>
          <div className="col-sm-9 p-0 m-0">
            <TaskList
              tasks={tasks}
              isStorageEmpty={isStorageEmpty}
              deleteTask={this.deleteTask}
              filterTaskList={this.filterTaskList}
            />
          </div>
        </div>
      </div>
    );
  }

  addTask = (title, description, category) => {
    const newTask = {
      title: title,
      description: description,
      category: category,
      completed: false
    };
    const newTasksList = [newTask, ...this.state.tasks];
    this.setState({ tasks: newTasksList, isStorageEmpty: false });
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
  };

  deleteTask = index => {
    const newTasksList = this.state.tasks;
    newTasksList.splice(index, 1);
    this.setState({ tasks: newTasksList });
    newTasksList.length > 0
      ? localStorage.setItem("tasks", JSON.stringify(newTasksList))
      : localStorage.removeItem("tasks");
  };

  filterTaskList = category => {
    const newTasksList = JSON.parse(localStorage.getItem("tasks"));
    if (category !== "Category") {
      this.setState({
        tasks: newTasksList.filter(task => {
          return task.category === category;
        })
      });
    } else this.setState({ tasks: newTasksList });
  };
}

export default Tasks;
