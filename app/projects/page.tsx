"use client";
import Image from "next/image";
import Container from "../components/Container";
import { useEffect, useState } from "react";

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
    <Container>
      <h1 className="text-6xl m-6">Projects</h1>
      {loading ? (
        <div className="flex gap-4">
          <p className="text-center text-xl text-gray-500 animate-pulse">
            Loading...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </Container>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-700 mb-4">{project.description}</p>
    {project.imageUrl && (
      
      <a href={project.link || '#'}>
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
    <div className="text-gray-600">
      <span className="font-semibold">Tech Stack:</span>{" "}
      {project.techStack.join(", ")}
    </div>
  </div>
);

export default Projects;
