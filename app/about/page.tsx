import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <Container>
      <div className="flex-grow grid grid-cols-[1fr,2fr] p-12 items-center justify-center">
        <div className="grid grid-cols-1">
          <h1 className="text-6xl">About Me</h1>
          <p className="text-2xl py-12">
            Junior Software Engineer specializing in Python and JavaScript.
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
          className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </Container>
  );
};

export default About;
