import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="relative w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto">
      <Image
        src="/profile (2).jpg"
        alt="Hyunwook Jung"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfilePicture;
