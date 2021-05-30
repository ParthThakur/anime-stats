import React from "react";

export default function Header(props) {
  return (
    <div className="main">
      <header>
        <h1>
          The<strong>Anime</strong>Dashboard
        </h1>

        <form className="username-box">
          <input
            type="text"
            className="username-field"
            placeholder="Type in your username."
            required
          />
        </form>
      </header>
    </div>
  );
}
