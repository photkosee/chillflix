import { fetchLatest } from "../action";
import InfiniteScroll from "../components/InfiniteScroll";
import ListLatest from "../components/ListLatest";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pb-7 pt-28">
      <ListLatest />
      <InfiniteScroll fetch={fetchLatest} />
    </div>
  );
};

export default Page;
