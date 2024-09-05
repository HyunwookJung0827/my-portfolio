import Image from "next/image";

const Signature = () => {
  return (
    <div className="w-1/2 relative aspect-video">
      <Image
        src="/signature.png"
        fill
        alt="Signature"
        className="object-contain"
      />
    </div>
  );
};

export default Signature;
