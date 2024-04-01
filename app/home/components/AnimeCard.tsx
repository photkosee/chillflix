import Image from "next/image";
import Link from "next/link";

import { PiStarFill } from "react-icons/pi";

// Sample response
// GET /api/animes
// 200
// [
//   {
//     "id": 56,
//     "name": "Test",
//     "russian": "аниме_56",
//     "image": {
//       "original": "/assets/globals/missing_original.jpg",
//       "preview": "/assets/globals/missing_preview.jpg",
//       "x96": "/assets/globals/missing_x96.jpg",
//       "x48": "/assets/globals/missing_x48.jpg"
//     },
//     "url": "/animes/56-test",
//     "kind": "tv",
//     "score": "8.0",
//     "status": "released",
//     "episodes": 0,
//     "episodes_aired": 0,
//     "aired_on": "2014-01-01",
//     "released_on": null
//   }
// ]

export interface AnimeProps {
  id: string;
  name: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
}

interface AnimeCardProps {
  anime: AnimeProps;
  index: number;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Link
      className="relative h-[335px] w-[230px] max-w-sm rounded"
      href={`/home/${anime.id}`}
    >
      <div className="relative h-full w-full rounded-lg bg-black/50 text-white">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          loading="lazy"
          fill
          sizes="100%"
          placeholder="empty"
          className="rounded-lg object-contain"
        />
        <div
          className="absolute bottom-0 flex w-full items-center justify-between
          gap-2 rounded-b-lg bg-black/80 p-2"
        >
          <h2 className="line-clamp-1 w-full text-lg font-bold text-white">
            {anime.name}
          </h2>
          <div className="flex items-center gap-1 text-amber-400">
            <PiStarFill />
            <p className="text-base font-bold">
              {parseInt(anime.score).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
