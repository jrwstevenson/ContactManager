import React, { Component } from "react";
import countryList from "country-list";
import { Consumer } from "../context";

class EditContact extends Component {
  state = {};

  getContact = contact => {
    Object.keys(this.state).length === 0
      ? this.setState({
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          avatar: contact.avatar,
          phone: contact.phone,
          country: contact.country
        })
      : console.log("Contact Loaded");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const countries = countryList().getData();

    return (
      <Consumer>
        {context => {
          const { id } = this.props.match.params;

          this.getContact(context.state.contacts[id]);

          return (
            <React.Fragment>
              <h1 className="logo">Edit Contact</h1>
              <div className="form-box">
                <form
                  onSubmit={e =>
                    context.editContact(e, {
                      id: id,
                      contact: this.state
                    })
                  }
                >
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
                  <button className="submit">Go Baby Go!</button>
                </form>
                <button
                  className="delete"
                  onClick={() => context.deleteContact(id)}
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
