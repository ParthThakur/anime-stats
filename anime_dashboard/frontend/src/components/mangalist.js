import React from "react";

export default function AnimeList(props) {
  return (
    <div>
      <p>This is manga list.</p>
      <div>{JSON.stringify(props.mangaList)}</div>
    </div>
  );
}
