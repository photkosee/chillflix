import Link from "next/link";

import { Check } from "lucide-react";

const Page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-5">
      <div className="flex min-h-[70vh] flex-col items-start justify-center gap-5">
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

        <Link
          href="/signup/registration"
          className="
          w-full max-w-[400px] self-center rounded-sm bg-primary py-4
          text-center text-xl text-white hover:bg-primary/90
          "
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
