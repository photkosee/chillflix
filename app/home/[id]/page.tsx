import { Suspense } from "react";

import { getAnime } from "../action";
import { CircularProgress } from "@nextui-org/react";

const Anime = async ({ id }: { id: string }) => {
  let data = await getAnime(id);

  return data;
};

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-7 pt-28">
      <Suspense
        fallback={<CircularProgress size="lg" aria-label="Loading..." />}
      >
        <Anime id={params.id} />
      </Suspense>
    </div>
  );
};

export default Page;
