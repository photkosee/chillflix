"use client";

import { useState } from "react";
import Link from "next/link";

import { Checkbox, Input } from "@nextui-org/react";
import { XCircle } from "lucide-react";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="mx-auto flex h-full max-w-[500px] items-center justify-center p-5">
      <div className="flex min-h-[70vh] flex-col items-start justify-center gap-5">
        <div className="flex flex-col">
          <div className="text-xs uppercase text-black">step 2 of 3</div>
          <div className="text-2xl font-semibold text-black sm:text-3xl">
            Create a password to start your membership
          </div>
        </div>

        <div className="flex flex-wrap text-lg text-black">
          Just a few more steps and you&apos;re done! We hate paperwork, too.
        </div>

        <div className="flex w-full flex-col gap-2">
          <Input
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <div className="flex items-center gap-1 text-xs text-primary">
            <XCircle size={20} />
            Email is required. Email should be between 5 and 50 characters.
            Please enter a valid email address.
          </div>

          <Input
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <div className="flex items-center gap-1 text-xs text-primary">
            <XCircle size={20} />
            Password is required.
          </div>
        </div>

        <Checkbox>
          <div className="text-sm text-black">
            Please do not email me Chillflix special offers.
          </div>
        </Checkbox>

        <Link
          href="/signup/regform"
          className="w-full rounded-sm bg-primary py-4 text-center text-xl text-white hover:bg-primary/90"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
