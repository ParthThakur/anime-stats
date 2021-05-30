import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./homepage";

export default function App(props) {
  return (
    <div className="app-inner-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
