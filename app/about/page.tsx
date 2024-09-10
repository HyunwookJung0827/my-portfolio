import Container from "../components/Container";
import ParticlesBackground from "../components/ParticlesBackground";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <ParticlesBackground>
      <Container>
        <div className="flex-grow grid grid-cols-[1fr,1fr] p-12 items-center justify-center">
          <div className="grid grid-cols-1">
            <h1 className="text-6xl text-white">About Me</h1>
            <p className="text-lg py-12 text-gray-300">
              I am a highly motivated and results-oriented individual with a
              strong work ethic. I am also a quick learner and I am eager to
              take on new challenges. I am a team player and I am always willing
              to help others.
            </p>
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/HyunwookJung.pdf"
            download
            className="inline-block bg-transparent text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md border-2 border-white hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </Container>
    </ParticlesBackground>
  );
};

export default About;
