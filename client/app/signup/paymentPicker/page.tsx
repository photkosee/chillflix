import Link from "next/link";

import {
  Check,
  CheckCircle2,
  ChevronRight,
  KeyRound,
  Lock,
} from "lucide-react";

const Page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-5">
      <div className="flex min-h-[70vh] w-full flex-col items-start justify-center gap-5">
        <div
          className="flex h-[47px] w-[47px] items-center justify-center
          rounded-full border-4 border-primary text-primary md:self-center
          "
        >
          <Lock strokeWidth={3} size={20} />
        </div>

        <div className="flex w-full flex-col md:self-center">
          <div className="text-xs uppercase text-black md:self-center">
            step 3 of 3
          </div>
          <div className="text-2xl font-semibold text-black sm:text-3xl md:self-center">
            Choose how to pay
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 md:items-center">
          <div
            className="
            flex w-full flex-wrap text-lg text-black
            md:justify-center
            "
          >
            Your payment is encrypted and you can change how you pay anytime.
          </div>

          <div
            className="
            flex w-full flex-wrap text-lg font-semibold
            text-black md:justify-center
            "
          >
            Secure for peace of mind. Cancel easily online.
          </div>
        </div>

        <div className="flex w-full max-w-[500px] flex-col gap-1 md:mx-auto">
          <div className="flex w-full items-center justify-end gap-1">
            <div className="text-xs text-black">End-to-end encrypted</div>
            <KeyRound className="text-yellow-400" size={15} />
          </div>

          <button
            className="flex w-full justify-between gap-3 rounded-md
            border-2 border-gray-300 p-4 text-black
            "
          >
            <div className="flex flex-wrap items-center gap-2">
              Credit or Debit Card
              <div className="flex items-center gap-1">
                <img src="/images/visa.png" alt="visa" />
                <img src="/images/mastercard.png" alt="mastercard" />
                <img src="/images/amex.png" alt="amex" />
                <img src="/images/unionpay.png" alt="unionpay" />
              </div>
            </div>
            <ChevronRight />
          </button>

          <button
            className="flex w-full justify-between gap-2 rounded-md
            border-2 border-gray-300 p-4 text-black
            "
          >
            <div className="flex flex-wrap items-center gap-2">
              Gift Code
              <div
                className="
                flex items-center justify-center border border-gray-100
                p-1 text-xs font-bold uppercase text-primary
                "
              >
                chillflix
              </div>
            </div>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
