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
    const key = Date.now();
    const avatar =
      this.avatarRef.value.value !== ""
        ? this.avatarRef.value.value
        : "/images/default-user-image-300x300.png";
    const contact = {
      firstName: this.firstNameRef.value.value,
      lastName: this.lastNameRef.value.value,
      email: this.emailRef.value.value,
      phone: this.phoneRef.value.value,
      avatar: avatar,
      country: this.countryRef.value.value,
      key: key.toString()
    };
    console.log(contact);

    addContact(contact, key);

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
                  required
                />
                <input
                  name="lastName"
                  ref={this.lastNameRef}
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  name="email"
                  ref={this.emailRef}
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  name="phone"
                  ref={this.phoneRef}
                  type="text"
                  placeholder="Phone"
                  required
                />
                <input
                  name="avatar"
                  ref={this.avatarRef}
                  type="text"
                  placeholder="Avatar URL"
                />
                <select name="country" ref={this.countryRef} required>
                  <option value="none" disabled selected>
                    Select Country
                  </option>
                  {countries.map(country => (
                    <option key={country.name}>{country.name}</option>
                  ))}
                </select>
                <button className="submit">Add Contact</button>
              </form>
            </div>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default AddContact;
