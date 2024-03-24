import { fetchMovie } from "../action";
import InfiniteScroll from "../components/InfiniteScroll";
import ListMovie from "../components/ListMovie";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pb-7 pt-28">
      <ListMovie />
      <InfiniteScroll fetch={fetchMovie} />
    </div>
  );
};

export default Page;
