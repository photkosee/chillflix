const SecondSection = () => {
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
              Download your shows to watch offline
            </div>
            <div className="p text-center text-white lg:text-start">
              Save your favorites easily and always have something to watch.
            </div>
          </div>

          <div className="relative">
            <img src="/images/mobile.jpg" alt="mobile" />
            <div
              className="
              absolute bottom-10 left-1/2 flex h-[90px] w-full
              max-w-[270px] -translate-x-1/2 transform justify-between gap-2
              rounded-xl border-2 border-gray-500 bg-black
              px-2 py-3 sm:max-w-[400px]
              "
            >
              <div className="flex gap-3">
                <img src="/images/boxshot.png" alt="boxshot" />
                <div className="flex flex-col items-start justify-center">
                  <div className="font-bold text-white">Strager Things</div>
                  <div className="text-blue-500">Downloading...</div>
                </div>
              </div>
              <img src="/videos/download.gif" alt="download" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
