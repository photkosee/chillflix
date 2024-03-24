"use server";

import ListAll from "./ListAll";
import ListTV from "./ListTV";
import ListMovie from "./ListMovie";
import ListLatest from "./ListLatest";

interface AnimeListProps {
  genre: string;
}

const AnimeList = ({ genre }: AnimeListProps) => {
  return (
    <>
      {genre === "ALL" && <ListAll />}
      {genre === "TV" && <ListTV />}
      {genre === "MOVIE" && <ListMovie />}
      {genre === "LATEST" && <ListLatest />}
    </>
  );
};

export default AnimeList;
