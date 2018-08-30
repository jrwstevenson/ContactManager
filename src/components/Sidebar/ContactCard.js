import React, { Component } from "react";
import history from "../History";

class ContactCard extends Component {
  goToEdit = () => {
    console.log(this);
  };

  render() {
    const {
      firstName,
      lastName,
      avatar,
      country,
      email,
      phone
    } = this.props.details;
    const index = this.props.index;
    return (
      <div className="personCard">
        <div className="avatar">
          <img src={avatar} alt={firstName} />
        </div>
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{country}</p>
        <button onClick={() => history.push(`/contact/${index}/edit`)}>
          Edit
        </button>
        {/* <button onClick={() => this.goToEdit(index)}>Edit</button> */}
      </div>
    );
  }
}

export default ContactCard;
