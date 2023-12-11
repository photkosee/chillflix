"use client";

import Link from "next/link";
import { useState } from "react";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [email, setEmail] = useState<string>("");

  return (
      <div className="
        relative w-full min-h-screen bg-[url('/images/hero-cover.jpg')]
        bg-no-repeat bg-center bg-fixed bg-cover
        "
      >
        <div className="
          bg-gradient-to-t from-black via-transparent to-black bg-opacity-40 h-screen
          flex flex-col
          "
        >
          <nav className="px-10 py-5 flex justify-between">
            <Link href="/" passHref>
              <button className="uppercase text-2xl font-bold text-primary">
                chillflix
              </button>
            </Link>

            <Link href="/login" passHref>
              <Button className="h-9 px-5">
                Sign In
              </Button>
            </Link>
          </nav>

          <div className="
            w-full my-auto flex flex-col justify-center items-center
            gap-5 px-2
            "
          >
            <div className="text-white h1 text-center">
              Enjoy big movies, hit series and more from 99 บาท.
            </div>
            <div className="text-white p text-center">
              Join today. Cancel anytime
            </div>
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
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
