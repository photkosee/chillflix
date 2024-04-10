"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../features/users/userSlice";
import { RootState } from "../store";
import { Image } from "@nextui-org/react";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-7">
      <div className="flex flex-col gap-10">
        <div className="p text-center text-white">Who is watching?</div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div
              className="group w-40 hover:cursor-pointer"
              onClick={() => {
                dispatch(setUser(0));
                router.push("/home");
              }}
            >
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-xl border-2 border-transparent group-hover:border-white
                "
              >
                <Image
                  src="/images/lisa.jpg"
                  alt="user1"
                  width={160}
                  height={160}
                  radius="md"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-xl text-gray-400
                group-hover:cursor-pointer group-hover:text-white
                "
              >
                User1
              </div>
            </div>

            <div
              className="group w-40 hover:cursor-pointer"
              onClick={() => {
                dispatch(setUser(1));
                router.push("/home");
              }}
            >
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-xl border-2 border-transparent group-hover:border-white
                "
              >
                <Image
                  src="/images/rose.jpg"
                  alt="user2"
                  width={160}
                  height={160}
                  radius="md"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-xl text-gray-400  group-hover:text-white
                "
              >
                User2
              </div>
            </div>

            <div
              className="group w-40 hover:cursor-pointer"
              onClick={() => {
                dispatch(setUser(2));
                router.push("/home");
              }}
            >
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-xl border-2 border-transparent group-hover:border-white
                "
              >
                <Image
                  src="/images/jisoo.jpg"
                  alt="user3"
                  width={160}
                  height={160}
                  radius="md"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-xl text-gray-400 group-hover:text-white
                "
              >
                User3
              </div>
            </div>

            <div
              className="group w-40 hover:cursor-pointer"
              onClick={() => {
                dispatch(setUser(3));
                router.push("/home");
              }}
            >
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-xl border-2 border-transparent group-hover:border-white
                "
              >
                <Image
                  src="/images/jennie.jpg"
                  alt="user4"
                  width={160}
                  height={160}
                  radius="md"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-xl text-gray-400 group-hover:text-white
                "
              >
                User4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
