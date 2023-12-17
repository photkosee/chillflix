"use client";

import Link from "next/link";
import { useState } from "react";

import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

export const SignInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .trim()
    .min(1, "Password is required.")
    .min(4, "Your password must contain between 4 and 60 characters.")
    .max(60, "Your password must contain between 4 and 60 characters."),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

const Page = () => {
  const [hasEmail, setHasEmail] = useState<boolean>(true);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    console.log(data.email, data.password);
    try {
      const url = `${process.env.API_PORT}/api/auth/login`;
      const response = await axios
        .post(url, {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          const { token } = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

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
        <nav className="p-5">
          <Link href="/" passHref>
            <img src="/images/logo.png" alt="ChillFlix logo" className="w-[120px]" />
          </Link>
        </nav>

        <div className="m-auto rounded-lg bg-black/80 py-7 sm:px-5">
          <div
            className="
            mx-auto flex h-full max-w-lg flex-col items-center
            justify-center gap-5
            "
          >
            <form
              className="flex w-full flex-col justify-start gap-5 p-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-xl font-semibold text-white md:text-3xl">
                Sign In
              </div>

              <div className="flex flex-col gap-4">
                {!hasEmail && (
                  <div className="px-6 py-3 text-sm text-white bg-warning rounded-sm">
                    Sorry, we can&apos;t find an account with this email address. Please
                    try again or&nbsp;
                    <Link href="/signup" className="underline">
                      create a new account.
                    </Link>
                  </div>
                )}

                {isPasswordInvalid && (
                  <div className="px-6 py-3 text-sm text-white bg-warning rounded-sm">
                    Invalid password
                    <Link href="/signup" className="underline">
                      Don&apos;t remember your password?
                    </Link>
                  </div>
                )}

                <div className="flex w-full flex-col gap-1">
                  <div className={`relative w-full ${errors.email && "border-b-3 border-warning rounded-sm"}`}>
                    <input
                      className="text-md bg-neutral peer block w-full appearance-none
                      rounded-sm px-6 pb-1 pt-6 text-white focus:outline-none
                      "
                      id="email"
                      {...register("email")}
                      placeholder=""
                    />

                    <label
                      className="
                      text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3
                      scale-75 transform cursor-text text-gray-400 duration-100
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      peer-focus:-translate-y-3 peer-focus:scale-75
                      "
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-warning">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="flex w-full flex-col gap-1">
                  <div className={`relative w-full ${errors.password && "border-b-3 border-warning rounded-sm"}`}>
                    <input
                      className="text-md bg-neutral peer block w-full appearance-none
                        rounded-sm px-6 pb-1 pt-6 text-white focus:outline-none
                        "
                      id="password"
                      {...register("password")}
                      type="password"
                      placeholder=""
                    />

                    <label
                      className="
                        text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3
                        scale-75 transform cursor-text text-gray-400 duration-100
                        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                        peer-focus:-translate-y-3 peer-focus:scale-75
                        "
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  {errors.password && (
                    <div className="flex items-center gap-1 text-xs text-warning">
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>

              <button
                className="rounded-sm bg-primary py-3 text-white hover:bg-primary/90"
                type="submit"
              >
                Sign In
              </button>

              <div className="flex w-full justify-center gap-3">
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
                 bg-white transition hover:opacity-80
                  "
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
                 bg-white transition hover:opacity-80
                  "
                >
                  <FaFacebook color="blue" size={30} />
                </div>
                <div
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
                 bg-white transition hover:opacity-80
                  "
                >
                  <FaGithub color="black" size={30} />
                </div>
              </div>
            </form>

            <div className="flex w-full flex-col justify-start gap-3 px-7">
              <div className="text-gray-400/60">
                New to Chillflix?&nbsp;
                <Link href="/signup" className="text-white hover:underline">
                  Sign up now.
                </Link>
              </div>
              
              <div className="text-gray-400/80">
                This page doesn&apos;t need to ensure you&apos;re not a bot.&nbsp;
                <Link href="/" className="text-blue-500 hover:underline">
                  Learn more.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
