import React, { Component } from "react";
import ContactCard from "./ContactCard";

export class Contact extends Component {
  onToggle = () => {
    this.props.onToggle(this.props.index);
  };

  render() {
    const { firstName, lastName, avatar } = this.props.details;
    return (
      <React.Fragment>
        <li className="person" onClick={this.onToggle}>
          <img
            src={avatar}
            alt={`${firstName} ${lastName}`}
            className="avatar"
          />
          <span className="name">
            {firstName} {lastName}
          </span>
        </li>
        <ContactCard
          details={this.props.details}
          index={this.props.index}
          goToEdit={this.props.goToEdit}
          state={this.props.state}
        />
      </React.Fragment>
    );
  }
}

export default Contact;
