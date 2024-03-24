"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { CircularProgress } from "@nextui-org/react";

export type AnimeCard = JSX.Element;

interface InfiniteScrollProps {
  fetch: (page: number) => Promise<AnimeCard[]>;
}

const InfiniteScroll = ({ fetch }: InfiniteScrollProps) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let page = 2;

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const delay = 500;

      const timeout = setTimeout(() => {
        fetch(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section
        className="grid max-w-7xl grid-cols-1 gap-x-7 gap-y-3 px-10 pt-3
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {data}
      </section>
      <section className="flex w-full items-center justify-center pb-10 pt-7">
        <div ref={ref}>
          {inView && isLoading && (
            <CircularProgress size="lg" aria-label="Loading..." />
          )}
        </div>
      </section>
    </>
  );
};

export default InfiniteScroll;
