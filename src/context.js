import React, { Component } from "react";
import sampleContacts from "./sampleUsers100";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: {
      JS1: {
        firstName: "James",
        lastName: "Stevenson",
        email: "hello@james.stevenson.com",
        avatar:
          "https://en.gravatar.com/userimage/104602539/38dde258892810e45f03a69c4407c6d1.jpg?size=200",
        phone: "0034 690 282 077",
        country: "Spain"
      }
    },
    search: ""
  };

  saveLocal = state => {
    state = this.state;
    localStorage.setItem("Contacts", JSON.stringify(state));
  };

  addContact = contact => {
    const contacts = { ...this.state.contacts };
    contacts[`${Date.now()}`] = contact;
    this.setState({ contacts });
    this.saveLocal();
    // console.log(contacts);
  };

  editContact = (e, data) => {
    e.preventDefault();
    // 1. Copy State
    const contacts = { ...this.state.contacts };
    // 2. update state
    contacts[data.id] = data.contact;
    // 3. set to state
    this.setState({ contacts });

    this.props.children.props.history.push("/");
    // console.log(this);
  };

  deleteContact = id => {
    delete this.state.contacts[id];
    this.props.children.props.history.push("/");
  };

  importContacts = () => {
    // alert("Clicked");
    this.setState({ contacts: sampleContacts });
  };

  goToEdit = index => {
    this.props.history.push(`/contact/${index}/edit`);
    // console.log(index);
  };

  sayTwat = e => {
    e.preventDefault();
    alert("Twat");
  };

  updateSearch = searchTerm => {
    console.log(searchTerm);
    this.setState({ search: searchTerm });
  };

  filterContacts = () => {
    const contacts = Object.values(this.state.contacts);
    const search = this.state.search;
    console.log(contacts);
    const filterItems = contacts.filter(contact => {
      return contact.firstName === search;
    });
    console.log(`filtered: ${filterItems}`);
    return filterItems;
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          addContact: this.addContact,
          importContacts: this.importContacts,
          gotoAdd: this.goToAdd,
          goToEdit: this.goToEdit,
          history: this.history,
          sayTwat: this.sayTwat,
          updateSearch: this.updateSearch,
          filterContacts: this.filterContacts,
          editContact: this.editContact,
          deleteContact: this.deleteContact
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
