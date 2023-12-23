import Link from "next/link";

import { ChevronRight } from "lucide-react";

const AuthForm = () => {
  return (
    <div className="flex flex-col items-center gap-3 xs:flex-row">
      <Link href="/login" passHref>
        <button
          className="flex items-center justify-center rounded-sm bg-primary py-2 pl-4 pr-3
          text-xl font-bold text-white transition duration-300 hover:bg-secondary
          "
        >
          Sign In
        </button>
      </Link>

      <Link href="/signup" passHref>
        <button
          className="flex items-center justify-center rounded-sm bg-primary py-2 pl-4 pr-3
          text-xl font-bold text-white transition duration-300 hover:bg-secondary
          "
        >
          Register
          <ChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default AuthForm;
