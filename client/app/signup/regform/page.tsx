"use client";

import { useEffect, useState } from "react";

import { Checkbox } from "@nextui-org/react";
import { XCircle } from "lucide-react";

import Input from "@/components/Input";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setIsDisabled(false);
    }
  }, []);

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(currEmail);
    console.log(currEmail)
    if (!currEmail) {
      setEmailError("Email is required.");
      setIsDisabled(true);
    } else if (currEmail.length < 5 || currEmail.length > 50) {
      setEmailError("Email should be between 5 and 50 characters.");
      setIsDisabled(true);
    } else if (!emailRegex.test(currEmail)) {
      setEmailError("Please enter a valid email address.");
      setIsDisabled(true);
    } else {
      setEmailError("");
    }
  }

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currPassword = e.target.value;
    setPassword(currPassword);

    if (!currPassword) {
      setPasswordError("Password is required.");
      setIsDisabled(true);
    } else if (currPassword.length < 6 || currPassword.length > 60) {
      setPasswordError("Password should be between 6 and 60 characters.");
      setIsDisabled(true);
    } else {
      setPasswordError("");
      console.log("hit");
    }
  };

  return (
    <div className="mx-auto flex h-full max-w-[500px] items-center justify-center p-5">
      <form className="flex min-h-[70vh] flex-col items-start justify-center gap-5">
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
            onChange={(e) => handleOnChangeEmail(e)}
            value={email}
            type="email"
          />
          <div
            className={`${
              emailError ? "flex" : "hidden"
            } items-center gap-1 text-xs text-primary`}
          >
            <XCircle size={20} />
            {emailError}
          </div>

          <Input
            id="password"
            label="Password"
            onChange={(e) => handleOnChangePassword(e)}
            value={password}
            type="password"
          />
          <div
            className={`${
              passwordError ? "flex" : "hidden"
            } items-center gap-1 text-xs text-primary`}
          >
            <XCircle size={20} />
            {passwordError}
          </div>
        </div>

        <Checkbox>
          <div className="text-sm text-black">
            Please do not email me Chillflix special offers.
          </div>
        </Checkbox>

        <button
          className="w-full rounded-sm bg-primary py-4
          text-center text-xl text-white hover:bg-primary/90
          "
          type="submit"
          onSubmit={() => {}}
          disabled={isDisabled}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Page;
