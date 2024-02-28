import { getGenres } from "@/app/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Billboard = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGenres());
  // }, [dispatch]);

  return (
    <div className="relative h-[55vw] w-full">
      <video
        autoPlay
        muted
        loop
        poster=""
        src=""
        className="h-full w-full object-cover brightness-75"
      ></video>
      <div className="absolute left-0 top-0 h-full w-full"></div>
    </div>
  );
};

export default Billboard;
