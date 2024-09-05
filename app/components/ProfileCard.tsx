import Container from "./Container";
import ProfilePicture from "./ProfilePicture";
import Signature from "./Signature";

const ProfileCard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <ProfilePicture />
        <Signature />
        <h2 className="text-2xl text-black font-semibold font-serif">
          Hyunwook Jung
        </h2>
      </div>
    </Container>
  );
};

export default ProfileCard;
