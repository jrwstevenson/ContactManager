import React, { Component } from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Search />
        <Navbar
          history={this.props.history}
          importContacts={this.props.importContacts}
        />
        <Contacts contacts={this.props.contacts} />
      </div>
    );
  }
}

export default Sidebar;
