import { fetchTV } from "../action";
import InfiniteScroll from "../components/InfiniteScroll";
import ListTV from "../components/ListTV";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pb-7 pt-28">
      <ListTV />
      <InfiniteScroll fetch={fetchTV} />
    </div>
  );
};

export default Page;
