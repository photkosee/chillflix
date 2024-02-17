const FourthSection = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-black">
        <div
          className="
          flex max-w-7xl flex-col items-center gap-7 px-5 py-16
          lg:flex-row-reverse lg:justify-between lg:gap-5 xl:justify-around
          "
        >
          <div
            className="
            flex max-w-xl flex-col items-center justify-center
            gap-7 lg:items-start lg:justify-start
            "
          >
            <div className="h1 text-center text-white lg:text-start">
              Create profiles for kids
            </div>
            <div className="p text-center text-white lg:text-start">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </div>
          </div>

          <div className="relative">
            <img src="/images/kids.png" alt="kids" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
