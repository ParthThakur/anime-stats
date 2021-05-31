import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    fontSize: "auto",
    color: "#aaa",
    border: 0,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  },
});

export default function Header(props) {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const classes = useStyles();

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
              <Button
                className={`username ${classes.button}`}
                onClick={submitButtonClicked}
                variant="contained"
              >
                Check
              </Button>
            </Grid>
          </Grid>
        </form>
      </header>
    </div>
  );
}
