import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default function Header(props) {
  const [username, setUsername] = useState(null);
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const submitButtonClicked = (event) => {
    history.push(`/user/${username}`);
  };

  return (
    <div className="main">
      <header>
        <h1>
          The<strong>Anime</strong>Dashboard
        </h1>

        <form className="username box">
          <Grid container align="center">
            <Grid item xs={10}>
              <input
                type="text"
                className="username field"
                placeholder="Type in your username."
                onChange={handleUsernameChange}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <button
                type="submit"
                className="username submit"
                onClick={submitButtonClicked}
              >
                Send
              </button>
            </Grid>
          </Grid>
        </form>
      </header>
    </div>
  );
}
