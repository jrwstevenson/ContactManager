import React, { Component } from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Search />
        <Navbar />
        <Contacts />
      </div>
    );
  }
}

export default Sidebar;
