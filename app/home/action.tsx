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

export { getAnime, fetchTV, fetchMovie, fetchLatest, fetchAll };
