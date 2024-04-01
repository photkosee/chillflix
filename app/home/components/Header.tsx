"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import { FaCaretDown } from "react-icons/fa";
import { Bell, Search } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { setGenre } from "@/app/features/genres/genreSlice";
import { RootState } from "@/app/store";
import { logout } from "@/app/features/users/userSlice";

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const stickyDivRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);

  const handleScroll = () => {
    stickyDivRef.current &&
      setIsSticky(window.scrollY >= stickyDivRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full justify-center">
      <header
        className={`
          fixed z-30 flex w-full max-w-7xl items-center justify-between px-4
          py-5 transition duration-300 md:px-10 ${
            isSticky ? "bg-zinc-900/80" : "bg-transparent"
          }`}
        ref={stickyDivRef}
      >
        <div className="flex gap-3 md:gap-7 lg:gap-12">
          <Link href="/" passHref>
            <img
              src="/images/logo.png"
              alt="ChillFlix logo"
              className="w-[80px] md:w-[120px]"
            />
          </Link>

          <div className="hidden items-center gap-7 text-white lg:flex">
            <Link
              href="/home"
              className={`transition ${
                pathname === "/home" ? "text-red-500" : "hover:text-gray-300"
              }`}
              onClick={() => dispatch(setGenre("ALL"))}
            >
              Home
            </Link>
            <Link
              href="/home/tv"
              className={`transition ${
                pathname === "/home/tv" ? "text-red-500" : "hover:text-gray-300"
              }`}
              onClick={() => dispatch(setGenre("TV"))}
            >
              TV Shows
            </Link>
            <Link
              href="/home/movie"
              className={`transition ${
                pathname === "/home/movie"
                  ? "text-red-500"
                  : "hover:text-gray-300"
              }`}
              onClick={() => dispatch(setGenre("MOVIE"))}
            >
              Movies
            </Link>
            <Link
              href="/home/latest"
              className={`transition ${
                pathname === "/home/latest"
                  ? "text-red-500"
                  : "hover:text-gray-300"
              }`}
              onClick={() => dispatch(setGenre("LATEST"))}
            >
              Latest
            </Link>
          </div>

          <Dropdown className="dark">
            <DropdownTrigger>
              <div
                className="
              flex items-center gap-1 text-sm font-bold 
              text-primary lg:hidden
              "
                role="button"
              >
                Browse
                <FaCaretDown />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                key="home"
                className={`transition ${
                  pathname === "/home"
                    ? "text-red-500"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => router.push("/home")}
              >
                Home
              </DropdownItem>
              <DropdownItem
                key="tvshows"
                className={`transition ${
                  pathname === "/home/tv"
                    ? "text-red-500"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => router.push("/home/tv")}
              >
                TV Shows
              </DropdownItem>
              <DropdownItem
                key="movies"
                className={`transition ${
                  pathname === "/home/movie"
                    ? "text-red-500"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => router.push("/home/movie")}
              >
                Movies
              </DropdownItem>
              <DropdownItem
                key="latest"
                className={`transition ${
                  pathname === "/home/latest"
                    ? "text-red-500"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => router.push("/home/latest")}
              >
                Latest
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="flex items-center gap-5 text-white">
          <div className="flex items-center gap-3">
            <button className="p-1" onClick={() => router.push(`/home/search`)}>
              <Search className="h-4 lg:h-5" />
            </button>
            <Dropdown className="dark">
              <DropdownTrigger>
                <Bell className="h-4 lg:h-5" role="button" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="updates" className="text-white">
                  No updates...
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Dropdown className="dark">
            <DropdownTrigger>
              <div className="flex items-center gap-1" role="button">
                <div className="h-8 w-8 overflow-hidden rounded-sm md:h-10 md:w-10 xl:h-11 xl:w-11">
                  {user === 0 && <img src="/images/lisa.jpg" alt="Avatar" />}
                  {user === 1 && <img src="/images/rose.jpg" alt="Avatar" />}
                  {user === 2 && <img src="/images/jisoo.jpg" alt="Avatar" />}
                  {user === 3 && <img src="/images/jennie.jpg" alt="Avatar" />}
                </div>
                <FaCaretDown />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                key="home"
                className="text-white"
                onClick={() => {
                  router.push("/profiles");
                }}
              >
                Setting
              </DropdownItem>
              <DropdownItem
                key="tvshows"
                className="text-white"
                onClick={() => dispatch(logout())}
              >
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    </div>
  );
};

export default Header;
