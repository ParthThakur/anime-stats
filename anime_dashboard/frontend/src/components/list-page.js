import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import AnimeList from "./animelist";
import MangaList from "./mangalist";

const useStyles = makeStyles({
  button: {
    border: 0,
    borderRadius: 3,
    width: "100%",
  },
});

export default function ListPage(props) {
  const [userAnimeList, setAnimeList] = useState();
  const [userMangaList, setMangaList] = useState();
  const [view, setView] = useState(true);

  const classes = useStyles();

  let { username } = useParams();

  useEffect(function () {
    fetch(`/backend/animelist/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAnimeList(data);
        } else {
          setAnimeList({ error: "No user list found." });
        }
      });

    fetch(`/backend/mangalist/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMangaList(data);
        } else {
          setMangaList({ error: "No user list found." });
        }
      });
  }, []);

  function animeButtonClicked() {
    setView(true);
  }
  function mangaButtonClicked() {
    setView(false);
  }

  return (
    <div id="content">
      <nav className="navbar">
        <Grid container align="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={2} align="justify">
            <Button
              className={classes.button}
              onClick={() => animeButtonClicked()}
            >
              Anime
            </Button>
          </Grid>
          <Grid item xs={2} align="justify">
            <Button
              className={classes.button}
              onClick={() => mangaButtonClicked()}
            >
              Manga
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </nav>
      {view ? (
        <AnimeList animeList={userAnimeList} />
      ) : (
        <MangaList mangaList={userMangaList} />
      )}
    </div>
  );
}
