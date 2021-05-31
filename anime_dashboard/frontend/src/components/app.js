import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header";
import ListPage from "./list-page";

export default function App(props) {
  return (
    <div className="app-inner-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/user/:username" component={ListPage} />
        </Switch>
      </Router>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
