import React from "react";
import { render } from "react-dom";

export default function App(props) {
  return (
    <div>
      <h1>The Anime Dashboard!</h1>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);