import React, { Component } from "react";

class Navbar extends Component {
  goToAdd = () => {
    this.props.history.push("/contact/add");
  };

  render() {
    return (
      <nav className="contacts-nav">
        <ul>
          <li className="active">
            <a onClick={this.goToAdd}>Add Contact</a>
          </li>
          <li>
            <button onClick={this.props.importContacts} id="load">
              Load Sample Contacts
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
