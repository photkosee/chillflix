"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { Check } from "lucide-react";
import { Spinner } from "@nextui-org/react";

const PlanTable = dynamic(() => import("../components/PlanTable"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[80vh] w-full items-start justify-center p-10">
      <Spinner size="lg" />
    </div>
  ),
});

const Page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center px-5 pb-24 pt-7 xs:px-10">
      <div className="flex min-h-[70vh] w-full max-w-5xl flex-col items-start justify-center gap-10">
        <div className="mx-auto flex w-full flex-col justify-start gap-5">
          <div className="flex flex-col">
            <div className="text-xs uppercase text-black">step 1 of 3</div>
            <div className="text-2xl font-semibold text-black sm:text-3xl">
              Choose the plan that&apos;s right for you
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Check className="text-primary" />
              <div className="flex flex-wrap text-lg text-black">
                Watch all you want. Ad-free.
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Check className="text-primary" />
              <div className="flex flex-wrap text-lg text-black">
                Recommendations just for you.
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Check className="text-primary" />
              <div className="flex flex-wrap text-lg text-black">
                Change or cancel your plan anytime.
              </div>
            </div>
          </div>
        </div>

        <PlanTable path={"/signup/registration"} />
      </div>
    </div>
  );
};

export default Page;
