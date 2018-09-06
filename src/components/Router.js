import React from "react";
import { Router as BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import NotFound from "./NotFound";
import { Provider } from "../Context";
import history from "./History";

class Router extends React.Component {
  render() {
    return (
      <Provider>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
          <div className="content">
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/contact/add" component={AddContact} />
              <Route path="/contact/:id/edit" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
