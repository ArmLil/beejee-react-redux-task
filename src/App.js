import React, { Component } from "react";
import "./App.css";
import Header from "./containers/Header";
import TasksContainer from "./containers/TasksContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TasksContainer />
      </div>
    );
  }
}

export default App;
