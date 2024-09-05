import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm fixed bottom-0 w-full">
      <Container>
        <div
          className="flex flex-col md:flex-row
  justify-between pt-16 pb-8 items-center"
        >
          <FooterList>
            <h3 className="text-base font-bold">Email</h3>
            <Link href="mailto:as9804@berkeley.edu">
              <p>as9804@berkeley.edu</p>
            </Link>
          </FooterList>
          <div
            className="w-full  md:w-1/3 mb-6 
          md:mb-0"
          >
            <p>
              &copy; {new Date().getFullYear()} Hyunwook Jung. All rights
              reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Me</h3>
            <div className="flex gap-2">
              {/* View Resume(working on it) */}
              <Link href="https://www.linkedin.com/in/hyunwook-jung">
                <FaLinkedin
                  className="hover:text-slate-400 cursor-pointer"
                  size={24}
                />
              </Link>
              <Link href="https://github.com/HyunwookJung0827">
                <FaGithub
                  className="hover:text-slate-400 cursor-pointer"
                  size={24}
                />
              </Link>
              <Link href="mailto:as9804@berkeley.edu">
                <FaEnvelope
                  className="hover:text-slate-400 cursor-pointer"
                  size={24}
                />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
