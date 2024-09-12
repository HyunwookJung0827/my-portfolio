import Container from "./Container";
import ProfilePicture from "./ProfilePicture";

const ProfileCard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <ProfilePicture />
        {/* <Signature /> */}
        <h2 className="hidden md:flex text-2xl text-white font-semibold font-serif">
          Hyunwook Jung
        </h2>
      </div>
    </Container>
  );
};

export default ProfileCard;
