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
          <div className="avatar">
            <img src={avatar} alt={`${firstName} ${lastName}`} />
          </div>
          <div className="name">
            {firstName} {lastName}
          </div>
        </li>
        {this.props.state.selections === this.props.index ? (
          <ContactCard
            details={this.props.details}
            index={this.props.index}
            goToEdit={this.props.goToEdit}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Contact;
