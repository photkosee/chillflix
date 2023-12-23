import Link from "next/link";

import { ChevronRight } from "lucide-react";

import Questions from "./Questions";
import { Button } from "@/components/ui/button";

const QuestionSection = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-12 bg-black px-5 py-16">
        <div className="h1 text-center text-white">
          Frequently Asked Questions
        </div>

        <div className="flex w-full max-w-3xl justify-center">
          <Questions />
        </div>

        <div
          className="
          my-auto flex w-full flex-col items-center justify-center
          gap-5 px-2
          "
        >
          <div className="p text-center text-white">
            Ready to watch? Create your membership.
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Link href="/signup" passHref>
              <Button className="h-12 px-5 text-lg font-bold">
                Register
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
