import React, { Component } from "react";
import countryList from "country-list";

class AddContact extends Component {
  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  phoneRef = React.createRef();
  avatarRef = React.createRef();
  countryRef = React.createRef();

  createContact = event => {
    event.preventDefault();
    const contact = {
      firstName: this.firstNameRef.value.value,
      lastName: this.lastNameRef.value.value,
      email: this.emailRef.value.value,
      phone: this.phoneRef.value.value,
      avatar: this.avatarRef.value.value,
      country: this.countryRef.value.value
    };
    console.log("BeforeRouter");
    this.props.addContact(contact);

    event.currentTarget.reset();

    console.log("AfterRouter");
    this.props.props.history.push("/");
  };

  render() {
    const countries = countryList().getData();
    return (
      <div>
        <div className="form-container">
          <h1 className="logo">Add Contact</h1>
          <div className="form-box">
            <form onSubmit={this.createContact}>
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
              <button>Add Contact</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
