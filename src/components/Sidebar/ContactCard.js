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
      <div
        className={
          this.props.state.selections === this.props.index
            ? "personCard active"
            : "personCard"
        }
      >
        <div className="avatar">
          <img src={avatar} alt={firstName} />
        </div>
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="card-info">
          <p>
            <span className="label">Email</span>
            <a href={`mailto:${email}`}>
              <span className="data">{email}</span>
            </a>
          </p>

          <p>
            <span className="label">Phone</span>
            <a href={`tel:${phone}`}>
              <span className="data">{phone}</span>
            </a>
          </p>

          <p>
            <span className="label">Country</span>
            <span className="data">{country}</span>
          </p>
          <button
            className="edit"
            onClick={() => history.push(`/contact/${index}/edit`)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default ContactCard;
