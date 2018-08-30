import React, { Component } from "react";
import countryList from "country-list";
import { Consumer } from "../context";

class AddContact extends Component {
  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  phoneRef = React.createRef();
  avatarRef = React.createRef();
  countryRef = React.createRef();

  createContact = (addContact, e) => {
    e.preventDefault();
    const contact = {
      firstName: this.firstNameRef.value.value,
      lastName: this.lastNameRef.value.value,
      email: this.emailRef.value.value,
      phone: this.phoneRef.value.value,
      avatar: this.avatarRef.value.value,
      country: this.countryRef.value.value
    };
    console.log(contact);

    addContact(contact);

    e.currentTarget.reset();

    this.props.history.push("/");
  };

  render() {
    const countries = countryList().getData();
    return (
      <Consumer>
        {context => (
          <React.Fragment>
            <h1 className="logo">Add Contact</h1>
            <div className="form-box">
              <form
                onSubmit={this.createContact.bind(this, context.addContact)}
              >
                <input
                  name="firstName"
                  ref={this.firstNameRef}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  name="lastName"
                  ref={this.lastNameRef}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  name="email"
                  ref={this.emailRef}
                  type="text"
                  placeholder="Email"
                />
                <input
                  name="phone"
                  ref={this.phoneRef}
                  type="text"
                  placeholder="Phone"
                />
                <input
                  name="avatar"
                  ref={this.avatarRef}
                  type="text"
                  placeholder="Avatar URL"
                />
                <select name="country" ref={this.countryRef}>
                  <option value="none" disabled selected>
                    Select Country
                  </option>
                  {countries.map(country => (
                    <option key={country.name}>{country.name}</option>
                  ))}
                </select>
                <button className="submit">Go Baby Go!</button>
              </form>
            </div>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default AddContact;
