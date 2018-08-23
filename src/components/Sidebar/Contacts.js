import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  render() {
    return (
      <ul id="contacts">
        {Object.keys(this.props.contacts).map(key => (
          <Contact key={key} details={this.props.contacts[key]} />
        ))}
      </ul>
    );
  }
}

export default Contacts;
