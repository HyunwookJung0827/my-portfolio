"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  Engine,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Link from "next/link";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import { Redressed } from "next/font/google";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const ParticlesBackground = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-black bg-opacity-50">
            {/* NavBar Div */}
            <Link
              href={"/"}
              className={`${redressed.className} font-bold text-2xl whitespace-nowrap absolute top-4 left-4 text-gray-300 z-20`}
            >
              Hyunwook Jung
            </Link>
            <div className="ml-auto z-20">
              <button
                id="menu-btn"
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <FaChevronUp className="h-8 w-8" />
                ) : (
                  <FaChevronDown className="h-8 w-8" />
                )}
              </button>
            </div>
            <div
  className={`relative transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-48 opacity-100 visible" : "max-h-0 opacity-0 invisible"
  } `}
>
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Home
    </Link>
    <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      About
    </Link>
    <Link href="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Projects
    </Link>
    <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Contact
    </Link>
  </div>
</div>

          </div>
          {children}
        </div>
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;
