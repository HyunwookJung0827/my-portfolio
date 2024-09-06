"use client";

import Link from "next/link";

const ContactBox = () => {
  return (
      <Link href="mailto:as9804@berkeley.edu" className="bg-slate-700 text-white py-4 px-8 w-96 h-80 rounded-lg text-center justify-center place-content-center hover:bg-blue-700 transition duration-300 hover:scale-105">
        <p className="text-5xl font-bold my-2">Click Me</p>
        <p className="text-2xl">as9804@berkeley.edu</p>
      </Link >
  );
};

export default ContactBox;
