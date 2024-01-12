"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { Check } from "lucide-react";
import { Spinner } from "@nextui-org/react";

const PlanTable = dynamic(() => import("../components/PlanTable"), {
  ssr: false,
  loading: () => (
    <div className="flex w-full items-center justify-center">
      <Spinner />
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

        <PlanTable />

        <div className="flex w-full flex-col gap-2 text-xs text-gray-500">
          <div>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. But we don&apos;t have
            Terms of Use for more details.
          </div>
          <div>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </div>
        </div>

        <Link
          href="/signup/registration"
          className="
          pointer-events-none w-full max-w-[400px] self-center rounded-sm bg-primary
          py-4 text-center text-xl text-white hover:bg-primary/90
          "
          aria-disabled={true}
          tabIndex={true ? -1 : undefined}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
