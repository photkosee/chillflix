"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FaCaretDown } from "react-icons/fa";
import { Bell, Search } from "lucide-react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const stickyDivRef = useRef<HTMLDivElement>(null);

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
    <header
      className={`
      fixed z-30 flex w-full items-center justify-between px-4 py-5
      transition duration-300 md:px-10 ${
        isSticky ? "bg-zinc-900/80" : "bg-transparent"
      }
      `}
      ref={stickyDivRef}
    >
      <div className="flex gap-3 md:gap-7 lg:gap-12">
        <img
          src="/images/logo.png"
          alt="ChillFlix logo"
          className="w-[80px] md:w-[120px]"
        />

        <div className="hidden items-center gap-7 text-white lg:flex">
          <Link href="/" className="transition hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="transition hover:text-gray-300">
            TV Shows
          </Link>
          <Link href="/" className="transition hover:text-gray-300">
            Movies
          </Link>
          <Link href="/" className="transition hover:text-gray-300">
            Latest
          </Link>
          <Link href="/" className="transition hover:text-gray-300">
            My List
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
            <DropdownItem key="home" className="text-white">
              Home
            </DropdownItem>
            <DropdownItem key="tvshows" className="text-white">
              TV Shows
            </DropdownItem>
            <DropdownItem key="movies" className="text-white">
              Movies
            </DropdownItem>
            <DropdownItem key="mylist" className="text-white">
              My List
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex items-center gap-7 text-white">
        <div className="hidden items-center gap-3 sm:flex">
          <div className="relative flex h-9 w-[180px] justify-end lg:w-[230px]">
            <input
              className={`h-full rounded-3xl py-1.5 pl-4 pr-10 ${
                openSearch ? "w-full bg-neutral-800" : "w-0 bg-transparent"
              } duration-500`}
              disabled={!openSearch}
              placeholder="Search by name"
            />
            <Search
              className="absolute right-0 top-1/2 h-4 -translate-x-1/2 -translate-y-1/2 transform lg:h-5"
              role="button"
              onClick={() => setOpenSearch(!openSearch)}
            />
          </div>
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
              <div className="h-6 w-6 overflow-hidden rounded-sm md:h-9 md:w-9">
                <img src="/images/user1.png" alt="Avatar" />
              </div>
              <FaCaretDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="home" className="text-white">
              Setting
            </DropdownItem>
            <DropdownItem key="tvshows" className="text-white">
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
