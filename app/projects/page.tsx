"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        // console.log("Fetched projects:", data); // Log the fetched data
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ParticlesBackground>
      <div className="absolute inset-0 flex flex-col items-center text-white z-10">
        <h1 className="m-6">
        <TypeAnimation
          sequence={[
            `Projects`,
            999999,
            "",
          ]}
          speed={50}
          style={{ whiteSpace: "pre-line", fontSize: "3.75em" }}
        /></h1>
        {loading ? (
          <div className="flex gap-4">
            <p className="text-center text-xl text-gray-500 animate-pulse">
              Loading...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </ParticlesBackground>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project-card bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl text-white font-bold mb-2">{project.title}</h3>
    {/* Date */}
    {project.date && <p className="text-white mb-2 text-sm">{project.date}</p>}
    <p className="text-white mb-4">{project.description}</p>
    {project.imageUrl && (
      <a href={project.link || "#"}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={560}
          height={315}
          className="rounded-lg"
        />
      </a>
    )}
    {project.videoUrl && (
      <iframe
        width="560"
        height="315"
        src={project.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    )}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 my-2"
      >
        View Project
      </a>
    )}
    <div className="text-white">
      <span className="font-semibold">Tech Stack:</span>{" "}
      {project.techStack.join(", ")}
    </div>
  </div>
);

export default Projects;
