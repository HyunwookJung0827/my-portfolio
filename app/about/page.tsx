import Container from "../components/Container";
import ParticlesBackground from "../components/ParticlesBackground";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <ParticlesBackground>
      <Container>
      <div className="flex flex-col p-12 items-center lg:items-start justify-center space-y-8">
  {/* Heading */}
  <h1 className="text-4xl lg:text-6xl text-white">About Me</h1>

  {/* Description and ProfileCard - Two columns on larger screens, stacked vertically on small screens */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
    <p className="text-sm lg:text-lg text-gray-300">
      I am a highly motivated and results-oriented individual with a strong work ethic.
      I am also a quick learner, eager to take on new challenges. I am a team player
      and always willing to help others.
    </p>
    <div className="flex justify-center">
      <ProfileCard />
    </div>
  </div>

  {/* Resume download button */}
  <div className="flex justify-center w-full">
    <a
      href="/HyunwookJung.pdf"
      download
      className="inline-block bg-transparent text-white text-sm md:text-lg font-semibold py-3 px-6 rounded-lg shadow-md border-2 border-white hover:bg-blue-600 transition duration-300"
    >
      Download Resume
    </a>
  </div>
</div>

      </Container>
    </ParticlesBackground>
  );
};

export default About;
