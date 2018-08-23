import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AddContact from "./AddContact";
import NotFound from "./NotFound";
import sampleContacts from "../sampleUsers100";

class Router extends React.Component {
  state = {
    contacts: {
      id1: {
        firstName: "James",
        lastName: "Stevenson",
        email: "hello@james.stevenson.com",
        avatar:
          "https://en.gravatar.com/userimage/104602539/38dde258892810e45f03a69c4407c6d1.jpg?size=200",
        phone: "0034 690 282 077"
      }
    }
  };

  addContact = contact => {
    const contacts = { ...this.state.contacts };
    contacts[`${Date.now()}`] = contact;
    this.setState({ contacts });
  };

  importContacts = () => {
    this.setState({ contacts: sampleContacts });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <App
                  importContacts={this.importContacts}
                  history={props.history}
                  contacts={this.state.contacts}
                />
              )}
            />
            <Route
              path="/contact/add"
              render={props => (
                <AddContact addContact={this.addContact} props={props} />
              )}
            />
            <Route path="/contact/:id/edit" component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
