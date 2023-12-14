import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

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
        flex h-screen min-h-[500px] flex-col bg-opacity-40
        bg-gradient-to-t from-black via-transparent to-black
        "
      >
        <nav className="mx-auto flex w-full max-w-5xl justify-between px-2 py-5 sm:px-10">
          <Link href="/" passHref>
            <button className="text-2xl font-bold uppercase text-primary">
              chillflix
            </button>
          </Link>

          <Link href="/login" passHref>
            <Button className="h-9 px-5">Sign In</Button>
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
              <Button className="h-12 px-5 text-lg font-bold">
                Register
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
