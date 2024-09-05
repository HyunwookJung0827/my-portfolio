import Link from "next/link";
import Container from "../components/Container";
import { FaLinkedin } from "react-icons/fa6";

const Blog = () => {
  return (
    <Container>
      <h1 className="text-8xl">Blog</h1>
      <div>
        {/* View Resume(working on it) */}
        <Link href="https://www.linkedin.com/in/hyunwook-jung">
          <FaLinkedin />
          LinkedIn
        </Link>
      </div>
    </Container>
  );
};

export default Blog;
