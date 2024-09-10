'use client';
import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      // when you scroll, the NavBar will remain on top
      className="sticky
      top-0
      w-full
      bg-slate-200
      z-30
      shadow-sm"
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="flex
          items-center
          justify-between
          gap-3
          md:gap-0"
          >
            <Link
              href={"/"}
              className={`${redressed.className} font-bold text-2xl whitespace-nowrap`}
            >
              Hyunwook Jung
            </Link>

            {/* <ul className="hidden lg:flex space-x-6 text-white"> */}

            <Link
              href={"/"}
              className={`hidden md:flex font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              HOME
            </Link>
            <Link
              href={"/about"}
              className={`hidden md:flex font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              ABOUT
            </Link>
            {/* <Link href={"/blog"} className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}>
              BLOG
            </Link> */}
            <Link
              href={"/projects"}
              className={`hidden md:flex font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              PROJECTS
            </Link>
            <Link
              href={"/contact"}
              className={`hidden md:flex font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              CONTACT
            </Link>
            <div className="md:hidden ml-auto">
              <button
                id="menu-btn"
                className="text-slate-800 focus:outline-none"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <FaTimes className="h-8 w-8" />
                ) : (
                  <FaBars className="h-8 w-8" />
                )}
              </button>
            </div>
            <div className={`relative md:hidden ${isOpen ? "block" : "hidden"}`}>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
                <Link href="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</Link>
                <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
