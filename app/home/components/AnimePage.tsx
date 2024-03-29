import Image from "next/image";

import { PiStarFill } from "react-icons/pi";

// Sample response
// GET /api/animes/:id
// 200
// {
//   "id": 50,
//   "name": "anime_50",
//   "russian": "аниме_50",
//   "image": {
//     "original": "/assets/globals/missing_original.jpg",
//     "preview": "/assets/globals/missing_preview.jpg",
//     "x96": "/assets/globals/missing_x96.jpg",
//     "x48": "/assets/globals/missing_x48.jpg"
//   },
//   "url": "/animes/50-anime-50",
//   "kind": "tv",
//   "score": "1.0",
//   "status": "released",
//   "episodes": 0,
//   "episodes_aired": 0,
//   "aired_on": null,
//   "released_on": null,
//   "rating": "pg_13",
//   "english": [
//     null
//   ],
//   "japanese": [
//     null
//   ],
//   "synonyms": [],
//   "license_name_ru": null,
//   "duration": 0,
//   "description": null,
//   "description_html": "<div class=\"b-text_with_paragraphs\"></div>",
//   "description_source": null,
//   "franchise": null,
//   "favoured": false,
//   "anons": false,
//   "ongoing": false,
//   "thread_id": 270127,
//   "topic_id": 270127,
//   "myanimelist_id": 50,
//   "rates_scores_stats": [],
//   "rates_statuses_stats": [],
//   "updated_at": "2022-11-26T17:19:33.411+03:00",
//   "next_episode_at": null,
//   "fansubbers": [],
//   "fandubbers": [],
//   "licensors": [],
//   "genres": [],
//   "studios": [],
//   "videos": [],
//   "screenshots": [],
//   "user_rate": null
// }

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
  franchise: string;
  ongoing: boolean;
  studios: [{ name: string }];
}

interface AnimePageProps {
  anime: AnimeProps;
  index: number;
}

const AnimePage = ({ anime }: AnimePageProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-x-5 sm:flex-row sm:items-start sm:justify-center">
      <div className="relative h-[335px] w-[230px]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          loading="lazy"
          fill
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex h-[335px] w-[280px] flex-col pt-5 sm:justify-center">
        <h2 className="w-full text-lg font-bold text-white">{anime.name}</h2>
        <div className="flex items-center gap-1 text-amber-400">
          <PiStarFill />
          <p className="text-base font-bold">
            {parseInt(anime.score).toFixed(1)}
          </p>
        </div>
        <p className="text-md w-full text-white">
          Studio: {anime.studios[0] ? anime.studios[0].name : "Unknown"}
        </p>
        <p className="text-md w-full text-white">Kind: {anime.kind}</p>
        <p className="text-md w-full text-white">Episodes: {anime.episodes}</p>
        <p className="text-md w-full text-white">
          Franchise:{" "}
          {anime.franchise ? anime.franchise.replace(/_/g, " ") : "None"}
        </p>
        <p className="text-md w-full text-white">
          {anime.ongoing ? "Ongoing" : "Completed"}
        </p>
      </div>
    </div>
  );
};

export default AnimePage;
