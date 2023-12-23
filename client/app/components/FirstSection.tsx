const FirstSection = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-black">
        <div
          className="
          flex max-w-7xl flex-col items-center gap-7 px-5 py-16
          lg:flex-row lg:justify-between lg:gap-5 xl:justify-around
          "
        >
          <div
            className="
            flex max-w-xl flex-col items-center justify-center
            gap-7 lg:items-start lg:justify-start
            "
          >
            <div className="h1 text-center text-white lg:text-start">
              Enjoy on your TV
            </div>
            <div className="p text-center text-white lg:text-start">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </div>
          </div>

          <div className="relative">
            <img src="/images/tv.png" alt="tv" className="relative z-20 pt-3" />
            <video
              className="absolute inset-0 z-10 m-auto object-contain"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/videos/tv.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
