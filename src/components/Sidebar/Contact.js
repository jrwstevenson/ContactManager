import React, { Component } from "react";

export class Contact extends Component {
  showCard = () => {
    alert("Twat");
  };

  render() {
    const {
      firstName,
      lastName,
      avatar,
      email,
      phone,
      country
    } = this.props.details;
    return (
      <React.Fragment>
        <li className="person" onClick={this.showCard}>
          <span className="avatar">
            <img src={avatar} alt={`${firstName} ${lastName}`} />
          </span>
          <span className="info">
            <span className="name">
              {firstName} {lastName}
            </span>
          </span>
        </li>
        <div className="personCard">
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
