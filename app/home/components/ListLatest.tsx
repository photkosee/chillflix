import { fetchLatest } from "../action";

const ListLatest = async () => {
  let data = await fetchLatest(1);

  return (
    <section
      className="grid max-w-7xl grid-cols-1 gap-x-7 gap-y-3 px-10
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data}
    </section>
  );
};

export default ListLatest;
