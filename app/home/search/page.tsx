"use client";

import { Suspense, useEffect, useState } from "react";

import { Input, CircularProgress } from "@nextui-org/react";

import AnimeCard, { AnimeProps } from "../components/AnimeCard";

const Anime = async ({ query }: { query: string }) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?search=${query}&limit=12&order=popularity`,
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

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearch(query);
    }, 750);

    return () => clearTimeout(delayDebounce);
  }, [query, setSearch]);

  return (
    <div className="flex min-h-screen flex-col items-center gap-10 pb-7 pt-24">
      <div className="relative flex w-full max-w-md items-center justify-center px-10">
        <Input
          type="text"
          variant="underlined"
          label="Search"
          placeholder="Search by name"
          className="w-full dark"
          size="lg"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Suspense
        fallback={<CircularProgress size="lg" aria-label="Loading..." />}
      >
        <Anime query={search} />
      </Suspense>
    </div>
  );
};

export default Page;
