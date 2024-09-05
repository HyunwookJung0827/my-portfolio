import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
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
      <div className="py-4 border-b-[1px">
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
              className={`${redressed.className} font-bold text-2xl `}
            >
              Hyunwook Jung
            </Link>
            <Link
              href={"/"}
              className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              HOME
            </Link>
            <Link
              href={"/about"}
              className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              ABOUT
            </Link>
            {/* <Link href={"/blog"} className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}>
              BLOG
            </Link> */}
            <Link
              href={"/projects"}
              className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              PROJECTS
            </Link>
            <Link
              href={"/contact"}
              className={`font-bold text-2xl hover:underline hover:scale-105 transition duration-100`}
            >
              CONTACT
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
