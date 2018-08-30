import React, { Component } from "react";
import sampleContacts from "./sampleUsers";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: {},
    search: ""
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("JS-Contacts-Manger");
    if (localStorageRef) {
      this.setState({ contacts: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    const state = this.state;
    localStorage.setItem("JS-Contacts-Manger", JSON.stringify(state.contacts));
  }

  addContact = (contact, key) => {
    const contacts = { ...this.state.contacts };
    contacts[key] = contact;
    this.setState({ contacts });
  };

  editContact = (e, data) => {
    e.preventDefault();
    const contacts = { ...this.state.contacts };
    contacts[data.id] = data.contact;
    this.setState({ contacts });
    this.props.children.props.history.push("/");
  };

  deleteContact = id => {
    delete this.state.contacts[id];
    this.props.children.props.history.push("/");
  };

  importContacts = () => {
    this.setState({ contacts: sampleContacts });
  };

  goToEdit = index => {
    this.props.history.push(`/contact/${index}/edit`);
  };

  updateSearch = searchTerm => {
    this.setState({ search: searchTerm });
  };

  filterContacts = () => {
    const contacts = Object.values(this.state.contacts);
    const search = this.state.search;
    const filterItems = contacts.filter(contact => {
      return contact.firstName === search;
    });
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
