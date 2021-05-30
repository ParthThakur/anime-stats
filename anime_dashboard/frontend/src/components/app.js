import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header";

export default function App(props) {
  return (
    <div className="app-inner-container">
      <Router>
        <div>
          <Header />
          <Switch></Switch>
        </div>
      </Router>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
