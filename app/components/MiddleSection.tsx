"use client";

import { useState } from "react";

import { ChevronRight } from "lucide-react";

import Questions from "./Questions";
import Separator from "./Separator";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";

const MiddleSection = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Separator />

      <div className="
        flex flex-col lg:flex-row gap-7 lg:gap-5 lg:justify-between
        xl:justify-around px-5 py-16 items-center bg-black
        "
      >
        <div className="
          flex flex-col gap-7 justify-center items-center
          lg:justify-start lg:items-start max-w-xl
          "
        >
          <div className="h1 text-white text-center lg:text-start">
            Enjoy on your TV
          </div>
          <div className="p text-white text-center lg:text-start">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </div>
        </div>

        <div className="relative">
          <img src="/images/tv.png" alt="tv" />
          <video className="absolute inset-0 m-auto -z-10" autoPlay playsInline muted loop>
            <source src="/videos/tv.m4v" type="video/mp4"/>
          </video>
        </div>
      </div>

      <Separator />

      <div className="
        flex flex-col lg:flex-row-reverse gap-7 lg:gap-5 lg:justify-between
        xl:justify-around px-5 py-16 items-center bg-black
        "
      >
        <div className="
          flex flex-col gap-7 justify-center items-center
          lg:justify-start lg:items-start max-w-xl
          "
        >
          <div className="h1 text-white text-center lg:text-start">
            Download your shows to watch offline
          </div>
          <div className="p text-white text-center lg:text-start">
            Save your favorites easily and always have something to watch.
          </div>
        </div>

        <div className="relative">
          <img src="/images/mobile.jpg" alt="mobile" />
          <div className="
            absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black
            w-full max-w-[270px] sm:max-w-[400px] h-[90px] border-2
            border-gray-500 rounded-xl py-3 px-2
            flex justify-between gap-2
            "
          >
            <div className="flex gap-3">
              <img src="/images/boxshot.png" alt="boxshot" />
              <div className="flex flex-col items-start justify-center">
                <div className="text-white font-bold">
                  Strager Things
                </div>
                <div className="text-blue-500">
                  Downloading...
                </div>
              </div>
            </div>
            <img src="/videos/download.gif" alt="download" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="
        py-20 px-5 md:px-28 bg-black w-full flex justify-center items-center
        lg:justify-start
        "
      >
        <div className="
          w-full flex flex-col gap-7 justify-center items-center
          lg:justify-start lg:items-start max-w-xl
          "
        >
          <div className="h1 text-white text-center lg:text-start">
            Watch everywhere
          </div>
          <div className="p text-white text-center lg:text-start">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </div>
        </div>
      </div>

      <Separator />

      <div className="
        flex flex-col lg:flex-row-reverse gap-7 lg:gap-5 lg:justify-between
        xl:justify-around px-5 py-16 items-center bg-black
        "
      >
        <div className="
          flex flex-col gap-7 justify-center items-center
          lg:justify-start lg:items-start max-w-xl
          "
        >
          <div className="h1 text-white text-center lg:text-start">
            Create profiles for kids
          </div>
          <div className="p text-white text-center lg:text-start">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </div>
        </div>

        <div className="relative">
          <img src="/images/kids.png" alt="kids" />
        </div>
      </div>

      <Separator />

      <div className="w-full px-5 py-16 flex flex-col items-center gap-12 bg-black">
        <div className="h1 text-white text-center">
          Frequently Asked Questions
        </div>

        <div className="w-full max-w-3xl flex justify-center">
          <Questions />
        </div>

        <div className="
          w-full my-auto flex flex-col justify-center items-center
          gap-5 px-2
          "
        >
          <div className="text-white p text-center">
            Ready to watch? Enter your email to create or restart your membership.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <Input
              id="email"
              label="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button className="px-5 h-12 text-lg font-bold">
              Get Started
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
