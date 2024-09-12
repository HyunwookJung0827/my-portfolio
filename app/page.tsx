import Link from "next/link";
import ParticlesBackground from "./components/ParticlesBackground";

const HomePage = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center text-center max-w-[1920px]
  mx-auto min-h-screen"
      style={{ backgroundImage: `url('/small-dark-lines-9boqxbrl9hrlgljm.jpg')` }}>
        <h1 className="text-6xl font-bold mb-4 text-gray-300">Hi! I&apos;m Hyunwook Jung</h1>
        <h2 className="text-2xl text-gray-400">
          Junior Software Engineer specializing in{" "}
          <span className="text-blue-500 font-semibold">Python</span> and{" "}
          <span className="text-yellow-500 font-semibold">JavaScript</span>
        </h2>
      </div> */}
      <ParticlesBackground>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white text-center">Hyunwook Jung</h1>
          <nav className="flex space-x-4">
            <Link href="/" className="text-white text-lg hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-white text-lg hover:underline">
              About
            </Link>
            <Link
              href="/projects"
              className="text-white text-lg hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white text-lg hover:underline"
            >
              Contact
            </Link>
          </nav>
          <h2 className="text-lg lg:text-2xl text-gray-300 mt-4 mx-2 text-center">
            Junior Software Engineer specializing in{" "}
            <span className="text-blue-400 font-semibold">Python</span> and{" "}
            <span className="text-yellow-400 font-semibold">
              JavaScript Framework
            </span>
          </h2>
        </div>
      </ParticlesBackground>
    </>
  );
};

export default HomePage;
