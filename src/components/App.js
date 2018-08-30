import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Display from "./Display";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Display />
      </React.Fragment>
    );
  }
}

export default App;
