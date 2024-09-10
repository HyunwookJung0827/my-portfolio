import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hyunwook Jung | Software Engineer Portfolio",
  description:
    "Explore the portfolio of Hyunwook Jung, a software engineer specializing in Python, JavaScript, and building efficient, scalable web applications. Discover projects, skills, and more.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <div className="flex flex-col min-h-screen">
          {/* <NavBar /> */}
          <main className="flex-grow">{children}</main>
          {/* <Footer />{" "} */}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
