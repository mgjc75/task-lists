import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Tasks from "./components/Tasks";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Tasks />
      </div>
    );
  }
}

export default App;
