import React, { Component } from "react";
import { Consumer } from "../../Context";
import history from "../History";

class Navbar extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <nav className="contacts-nav">
            <ul>
              <li className="active">
                <a onClick={() => history.push("/contact/add")}>Add Contact</a>
              </li>
              <li>
                <button onClick={context.importContacts} id="load">
                  Load Sample Contacts
                </button>
              </li>
            </ul>
          </nav>
        )}
      </Consumer>
    );
  }
}

export default Navbar;
