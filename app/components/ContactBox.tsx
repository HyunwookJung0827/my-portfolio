"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const ContactBox = () => {
  const [showManualEmailMessage, setShowManualEmailMessage] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setTimeout(() => {
      setShowManualEmailMessage(true);
    }, 100);
  };
  return (
    <a
      href="mailto:as9804@berkeley.edu"
      className="bg-slate-700 text-white py-4 px-8 w-96 h-80 rounded-lg text-center justify-center place-content-center hover:bg-blue-700 transition duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <p className="text-5xl font-bold my-2">Click Me</p>
      <p className="text-2xl">as9804@berkeley.edu</p>
      {showManualEmailMessage && (
        <p className="text-yellow-500 mt-4">
          If the link isn&apos;t working, please manually send an email to
          as9804@berkeley.edu.
        </p>
      )}
    </a>
  );
};

export default ContactBox;
