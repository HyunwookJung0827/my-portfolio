import Container from "./components/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">Hi! I&apos;m Hyunwook Jung</h1>
        <h2 className="text-2xl text-gray-600">
          Junior Software Engineer specializing in{" "}
          <span className="text-blue-500 font-semibold">Python</span> and{" "}
          <span className="text-yellow-500 font-semibold">JavaScript</span>
        </h2>
      </div>
    </Container>
  );
};

export default HomePage;