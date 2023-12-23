import Link from "next/link";

import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="
      relative h-screen min-h-[500px] w-full bg-[url('/images/hero-cover.jpg')]
      bg-cover bg-fixed bg-center bg-no-repeat
      "
    >
      <div
        className="
        flex h-screen min-h-[500px] flex-col bg-black/30
        bg-gradient-to-t from-black via-transparent to-black
        "
      >
        <nav className="mx-auto flex w-full max-w-7xl justify-between px-5 py-5 sm:px-10">
          <Link href="/" passHref>
            <img
              src="/images/logo.png"
              alt="ChillFlix logo"
              className="w-[120px] sm:w-[130px] lg:w-[140px]"
            />
          </Link>

          <Link href="/login" passHref>
            <button
              className="rounded-sm bg-primary px-4 py-2 text-sm font-bold text-white
              transition duration-300 hover:bg-secondary
              "
            >
              Sign In
            </button>
          </Link>
        </nav>

        <div
          className="
          my-auto flex w-full flex-col items-center justify-center
          gap-5 px-2
          "
        >
          <div className="h1 text-center text-white">
            Enjoy big movies, hit series and more from 99 บาท.
          </div>
          <div className="p text-center text-white">
            Join today. Cancel anytime
          </div>
          <div className="p text-center text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Link href="/signup" passHref>
              <button
                className="flex items-center justify-center rounded-sm bg-primary py-2 pl-4 pr-3
                text-xl font-bold text-white transition duration-300 hover:bg-secondary
                "
              >
                Register
                <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
