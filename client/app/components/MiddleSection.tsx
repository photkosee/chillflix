import Link from "next/link";

import { ChevronRight } from "lucide-react";

import Questions from "./Questions";
import Separator from "./Separator";
import { Button } from "@/components/ui/button";

const MiddleSection = () => {
  return (
    <>
      <Separator />

      <div
        className="
        flex flex-col items-center gap-7 bg-black px-5 py-16
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
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </div>
        </div>

        <div className="relative">
          <img src="/images/tv.png" alt="tv" />
          <video
            className="absolute inset-0 -z-10 m-auto"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/videos/tv.m4v" type="video/mp4" />
          </video>
        </div>
      </div>

      <Separator />

      <div
        className="
        flex flex-col items-center gap-7 bg-black px-5
        py-16 lg:flex-row-reverse lg:justify-between lg:gap-5 xl:justify-around
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

      <Separator />

      <div
        className="
        flex w-full items-center justify-center bg-black px-5 py-20 md:px-28
        lg:justify-start
        "
      >
        <div
          className="
          flex w-full max-w-xl flex-col items-center justify-center
          gap-7 lg:items-start lg:justify-start
          "
        >
          <div className="h1 text-center text-white lg:text-start">
            Watch everywhere
          </div>
          <div className="p text-center text-white lg:text-start">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
      </div>

      <Separator />

      <div
        className="
        flex flex-col items-center gap-7 bg-black px-5
        py-16 lg:flex-row-reverse lg:justify-between lg:gap-5 xl:justify-around
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

      <Separator />

      <div className="flex w-full flex-col items-center gap-12 bg-black px-5 py-16">
        <div className="h1 text-center text-white">
          Frequently Asked Questions
        </div>

        <div className="flex w-full max-w-3xl justify-center">
          <Questions />
        </div>

        <div
          className="
          my-auto flex w-full flex-col items-center justify-center
          gap-5 px-2
          "
        >
          <div className="p text-center text-white">
            Ready to watch? Create your membership.
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
    </>
  );
};

export default MiddleSection;
