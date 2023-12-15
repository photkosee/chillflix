import Link from "next/link";

import { Check, CheckCircle2 } from "lucide-react";

const Page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-5">
      <div className="flex min-h-[70vh] flex-col items-start justify-center gap-5">
        <CheckCircle2 className="text-primary md:self-center" size={50} />
        <div className="flex flex-col md:self-center">
          <div className="text-xs uppercase text-black md:self-center">
            step 1 of 3
          </div>
          <div className="text-2xl font-semibold text-black sm:text-3xl md:self-center">
            Choose your plan.
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Check className="text-primary" />
            <div className="flex flex-wrap text-lg text-black">
              No commitments, cancel anytime.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-primary" />
            <div className="flex flex-wrap text-lg text-black">
              Everything on Netflix for one low price.
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-primary" />
            <div className="flex flex-wrap text-lg text-black">
              No ads and no extra fees. Ever.
            </div>
          </div>
        </div>

        <Link
          href="/signup/planform"
          className="w-full rounded-sm bg-primary py-4 text-center text-xl text-white hover:bg-primary/90"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
