import React from "react";

export default function AnimeList(props) {
  return (
    <div>
      <p>This is anime list.</p>
      <div>{JSON.stringify(props.animeList)}</div>
    </div>
  );
}
