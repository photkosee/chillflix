"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Checkbox, CircularProgress } from "@nextui-org/react";
import { XCircle } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import axiosInstance from "@/app/axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const SignUpSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .min(5, "Email should be between 5 and 50 characters.")
    .email("Please enter a valid email address.")
    .max(50, "Email should be between 5 and 50 characters."),
  password: z
    .string()
    .trim()
    .min(1, "Password is required.")
    .min(6, "Password should be between 6 and 60 characters.")
    .max(60, "Password should be between 6 and 60 characters."),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Page = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    setLoading(true);
    const url = `/api/auth/register`;
    toast
      .promise(
        axiosInstance.post(url, {
          email: data.email,
          password: data.password,
        }),
        {},
      )
      .then((res) => {
        toast.success("Registration successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="mx-auto flex h-full max-w-[500px] items-center justify-center p-10">
      <form
        className="flex min-h-[70vh] flex-col items-start justify-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="text-xs uppercase text-black">step 2 of 3</div>
          <div className="text-2xl font-semibold text-black sm:text-3xl">
            Register to start your membership
          </div>
        </div>

        <div className="flex flex-wrap text-lg text-black">
          Just a few more steps and you&apos;re done! We hate paperwork, too.
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="relative w-full">
            <input
              className="text-md peer block w-full appearance-none rounded-sm border border-black
              bg-white px-6 pb-1 pt-6 text-black focus:outline-none
              "
              id="email"
              {...register("email")}
              placeholder=""
            />

            <label
              className="
              text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3
              scale-75 transform cursor-text text-black duration-100
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:-translate-y-3 peer-focus:scale-75
              "
              htmlFor="email"
            >
              Email
            </label>
          </div>
          {errors.email && (
            <div className="flex items-center gap-1 text-xs text-primary">
              <XCircle size={17} />
              {errors.email.message}
            </div>
          )}

          <div className="relative w-full">
            <input
              className="text-md peer block w-full appearance-none rounded-sm border border-black
              bg-white px-6 pb-1 pt-6 text-black focus:outline-none
              "
              id="password"
              {...register("password")}
              type="password"
              placeholder=""
            />

            <label
              className="
              text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3
              scale-75 transform cursor-text text-black duration-100
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:-translate-y-3 peer-focus:scale-75
              "
              htmlFor="password"
            >
              Password
            </label>
          </div>
          {errors.password && (
            <div className="flex items-center gap-1 text-xs text-primary">
              <XCircle size={17} />
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="flex w-full justify-center gap-3">
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
            border border-gray-300 bg-white transition hover:bg-black/10
            "
          >
            <FcGoogle size={30} />
          </div>
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
            border border-gray-300 bg-white transition hover:bg-black/10
            "
          >
            <FaFacebook color="blue" size={30} />
          </div>
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
            border border-gray-300 bg-white transition hover:bg-black/10
            "
          >
            <FaGithub color="black" size={30} />
          </div>
        </div>

        <Checkbox
          classNames={{
            wrapper: "",
          }}
          color="success"
          isSelected={isSelected}
          onValueChange={setIsSelected}
        >
          <div className="text-sm text-black">
            Please do not email me Chillflix special offers.
          </div>
        </Checkbox>

        <button
          className="flex h-[67px] w-full items-center
          justify-center rounded-sm bg-primary text-center
          text-xl text-white hover:bg-primary/90
          "
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress color="default" aria-label="Loading..." />
          ) : (
            "Next"
          )}
        </button>
      </form>
    </div>
  );
};

export default Page;
