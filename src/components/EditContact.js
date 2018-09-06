import React, { Component } from "react";
import countryList from "country-list";
import { Consumer } from "../Context";

class EditContact extends Component {
  state = {};

  getContact = (state, id) => {
    const contact = state.contacts.find(c => c.key === id);
    Object.keys(this.state).length === 0 && contact !== undefined
      ? this.setTheState(contact)
      : console.log("Contact Loaded");
  };

  setTheState = contact => {
    console.log(contact);
    this.setState({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      avatar: contact.avatar,
      phone: contact.phone,
      country: contact.country,
      key: contact.key
    });
  };

  deleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const updatedContact = this.state;

    dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });

    this.props.history.push("/");
  };

  render() {
    const countries = countryList().getData();

    return (
      <Consumer>
        {context => {
          const { id } = this.props.match.params;
          this.getContact(context.state, id);

          const dispatch = context.state.dispatch;

          return (
            <React.Fragment>
              <h1 className="logo">Edit Contact</h1>
              <div className="form-box">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <input
                    name="firstName"
                    value={this.state.firstName}
                    type="text"
                    placeholder="First Name"
                    onChange={this.onChange}
                  />
                  <input
                    name="lastName"
                    value={this.state.lastName}
                    type="text"
                    placeholder="Last Name"
                    onChange={this.onChange}
                  />
                  <input
                    name="email"
                    value={this.state.email}
                    type="text"
                    placeholder="Email"
                    onChange={this.onChange}
                  />
                  <input
                    name="phone"
                    value={this.state.phone}
                    type="text"
                    placeholder="Phone"
                    onChange={this.onChange}
                  />
                  <input
                    name="avatar"
                    value={this.state.avatar}
                    type="text"
                    placeholder="Avatar URL"
                    onChange={this.onChange}
                  />
                  <select
                    name="country"
                    value={this.state.country}
                    onChange={this.onChange}
                  >
                    <option value="none" disabled selected>
                      Select Country
                    </option>
                    {countries.map(country => (
                      <option key={country.name}>{country.name}</option>
                    ))}
                  </select>
                  <input
                    type="submit"
                    className="submit"
                    value="Update Contact"
                  />
                </form>
                <button
                  className="delete"
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
