import ContactBox from "../components/ContactBox";
import ParticlesBackground from "../components/ParticlesBackground";

const ContactPage = () => {
  return (
    <ParticlesBackground>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10"><ContactBox /></div>
      <div className="w-full min-h-[70vh] flex justify-center p-12">
        
      </div></ParticlesBackground>
  );
};

export default ContactPage;
