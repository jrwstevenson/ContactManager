import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

export class Contacts extends Component {
  state = {
    selections: ""
  };

  onChildToggle = selected => {
    if (selected === this.state.selections) {
      this.setState({
        selections: ""
      });
    } else {
      this.setState({
        selections: `${selected}`
      });
    }
  };

  render() {
    return (
      <Consumer>
        {context => {
          const contacts = context.state.contacts;
          const search = context.state.search;
          const filteredContacts = contacts.filter(contact => {
            return (
              contact.firstName.toLowerCase().indexOf(search.toLowerCase()) >
                -1 ||
              contact.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1
            );
          });

          return (
            <React.Fragment>
              <span className="count">
                {Object.keys(filteredContacts).length}
              </span>
              <ul className="contact-list">
                {filteredContacts
                  .sort(function(a, b) {
                    if (a.firstName < b.firstName) return -1;
                    if (a.firstName > b.firstName) return 1;
                    return 0;
                  })
                  .map(contact => (
                    <Contact
                      key={contact.key}
                      index={contact.key}
                      state={this.state}
                      goToEdit={context.goToEdit}
                      onToggle={this.onChildToggle}
                      details={contact}
                    />
                  ))}
              </ul>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
