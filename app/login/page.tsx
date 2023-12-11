"use client";

import { useState } from "react";

import Input from "@/components/Input";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full min-h-screen">
      <header>
        <Link href="/" passHref>
          <button className="uppercase text-primary text-2xl md:text-4xl font-bold p-4">
            chillflix
          </button>
        </Link>
      </header>

      <div className="
        max-w-lg h-full mx-auto flex flex-col gap-10
        justify-center items-center
        "
      >
        <form className="w-full flex flex-col justify-start gap-5 p-7">
          <div className="text-white text-xl md:text-3xl font-semibold">
            Sign In
          </div>

          <div className="flex flex-col gap-5">
            <Input
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />

            <Input
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>

          <button className="bg-primary text-white py-2 rounded-sm">
            Sign In
          </button>
        </form>

        <div className="w-full flex flex-col gap-3 justify-start px-7">
          <div className="flex gap-1">
            <div className="text-gray-400/60">
              New to Chillflix?
            </div>
            <a className="text-white hover:underline" href="/register">
              Sign up now.
            </a>
          </div>

          <div className="flex flex-col">
            <div className="text-gray-400/80">
              This page doesn&apos;t need to ensure you&apos;re not a bot.
            </div>
            <a className="text-blue-500 hover:underline" href="/">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
