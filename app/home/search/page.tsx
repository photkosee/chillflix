"use client";

import { Suspense, useEffect, useState } from "react";

import { Input, CircularProgress } from "@nextui-org/react";

import { searchAnime } from "../action";

const Anime = async ({ query }: { query: string }) => {
  let data = await searchAnime(query);

  return data;
};

const Page = () => {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearch(query);
    }, 500);

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
