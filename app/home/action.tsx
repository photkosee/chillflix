"use server";

import AnimeCard, { AnimeProps } from "./components/AnimeCard";
import AnimePage from "./components/AnimePage";

const MAX_LIMIT = 12;
const BASE_URL = "https://shikimori.one/api";

const getAnime = async (id: string) => {
  const response = await fetch(`${BASE_URL}/animes/${id}`);
  const data = await response.json();

  return <AnimePage anime={data} index={0} />;
};

const searchAnime = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/animes?search=${query}&limit=12&order=popularity`,
  );
  const data = await response.json();

  if (data.length === 0) {
    return <div className="text-white">0 search results found</div>;
  }

  return (
    <section
      className="grid max-w-7xl grid-cols-1 gap-x-7 gap-y-3 px-10
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data.map((anime: AnimeProps, index: number) => (
        <AnimeCard key={anime.id} anime={anime} index={index} />
      ))}
    </section>
  );
};

const fetchTV = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`,
  );

  const data = await response.json();

  return data.map((anime: AnimeProps, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};

const fetchMovie = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity&kind=movie`,
  );

  const data = await response.json();

  return data.map((anime: AnimeProps, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};

const fetchLatest = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/animes?page=${page}&limit=${MAX_LIMIT}&order=aired_on&order_direction=desc`,
  );

  const data = await response.json();

  return data.map((anime: AnimeProps, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};

const fetchAll = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/animes?page=${page}&limit=${MAX_LIMIT}&order=ranked`,
  );

  const data = await response.json();

  return data.map((anime: AnimeProps, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};

export { getAnime, searchAnime, fetchTV, fetchMovie, fetchLatest, fetchAll };
