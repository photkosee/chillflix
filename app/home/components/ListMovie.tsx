import { fetchMovie } from "../action";

const ListMovie = async () => {
  let data = await fetchMovie(1);

  return (
    <section
      className="grid max-w-7xl grid-cols-1 gap-x-7 gap-y-3 px-10
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data}
    </section>
  );
};

export default ListMovie;
