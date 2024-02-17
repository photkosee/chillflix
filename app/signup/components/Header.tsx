import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
      flex w-full items-center justify-between
      border-b border-gray-200 bg-white px-7 py-5
      "
    >
      <Link href="/" className="">
        <img
          src="/images/logo.png"
          alt="ChillFlix logo"
          className="w-[100px] sm:w-[120px] lg:w-[140px]"
        />
      </Link>
      <Link
        href="/login"
        className="text-md font-semibold text-black sm:text-xl"
      >
        Sign In
      </Link>
    </header>
  );
};

export default Header;
