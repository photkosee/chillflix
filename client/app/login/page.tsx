"use client";

import { useState } from "react";

import Input from "@/components/Input";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div
      className="
      relative min-h-screen w-full bg-black bg-cover
      bg-fixed bg-center bg-no-repeat lg:bg-[url('/images/hero-cover.jpg')]
      "
    >
      <div
        className="
        flex h-screen min-h-[500px] flex-col bg-opacity-40
        from-black via-transparent to-black lg:bg-gradient-to-t
        "
      >
        <nav>
          <Link href="/" passHref>
            <button className="p-4 text-2xl font-bold uppercase text-primary md:text-4xl">
              chillflix
            </button>
          </Link>
        </nav>

        <div className="m-auto rounded-xl bg-black/90 p-16 px-5">
          <div
            className="
            mx-auto flex h-full max-w-lg flex-col items-center
            justify-center gap-10
            "
          >
            <form className="flex w-full flex-col justify-start gap-5 p-7">
              <div className="text-xl font-semibold text-white md:text-3xl">
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

              <button className="rounded-sm bg-primary py-2 text-white">
                Sign In
              </button>
            </form>

            <div className="flex w-full flex-col justify-start gap-3 px-7">
              <div className="flex gap-1">
                <div className="text-gray-400/60">New to Chillflix?</div>
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
      </div>
    </div>
  );
};

export default Page;
