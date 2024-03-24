import { fetchAll } from "./action";
import InfiniteScroll from "./components/InfiniteScroll";
import ListAll from "./components/ListAll";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pb-7 pt-28">
      <ListAll />
      <InfiniteScroll fetch={fetchAll} />
    </div>
  );
};

export default Page;
