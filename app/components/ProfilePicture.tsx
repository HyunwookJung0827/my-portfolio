import Image from "next/image";


const ProfilePicture = () => {
  return (
    <div className="relative w-1/2">
      <Image
        src="/profile.jpg"
        alt="Hyunwook Jung"
        layout="responsive"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  );
};

export default ProfilePicture;
