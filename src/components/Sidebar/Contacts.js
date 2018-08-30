import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

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
        {context => (
          <React.Fragment>
            <ul className="contact-list">
              {Object.keys(context.state.contacts).map(key => (
                <Contact
                  onToggle={this.onChildToggle}
                  index={key}
                  key={key}
                  details={context.state.contacts[key]}
                  state={this.state}
                  goToEdit={context.goToEdit}
                />
              ))}
            </ul>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
