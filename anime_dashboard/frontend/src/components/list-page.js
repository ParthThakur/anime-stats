import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ListPage(props) {
  const [userAnimeList, setAnimeList] = useState();
  const [userMangaList, setMangaList] = useState();
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

  return <p>{JSON.stringify(userAnimeList)}</p>;
}
