import Link from "next/link";

import { Check, CheckCircle2, Laptop, Laptop2, MonitorSmartphone, Smartphone } from "lucide-react";

const Page = () => {
  return (
    <div className="mx-auto flex h-full max-w-[500px] items-center justify-center p-5">
      <div className="flex min-h-[70vh] flex-col items-start justify-center gap-7">
        <div className="max-w-[250px] md:self-center">
          <img src="/images/devices.png" alt="devices" />
        </div>

        <div className="flex flex-col md:self-center">
          <div className="text-xs uppercase text-black md:self-center">
            step 2 of 3
          </div>
          <div className="text-2xl font-semibold text-black sm:text-3xl md:self-center">
            Finish setting up your account
          </div>
        </div>

        <div className="flex flex-wrap text-lg text-black">
          Chillflix is personalized for you. Create a password to start watching
          Chillflix.
        </div>

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
