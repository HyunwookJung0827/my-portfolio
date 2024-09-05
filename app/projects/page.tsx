"use client";
import Image from "next/image";
import Container from "../components/Container";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        console.log("Fetched projects:", data); // Log the fetched data
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <h1 className="text-6xl m-6">Projects</h1>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </Container>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    {project.imageUrl && <Image src={project.imageUrl} alt={project.title} width={560} height={315}/>}
    {project.videoUrl && (
      <iframe
        width="560"
        height="315"
        src={project.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )}
    {project.link && (
      <a href={project.link} target="_blank">
        View Project
      </a>
    )}
    <div>Tech Stack: {project.techStack.join(", ")}</div>
  </div>
);

export default Projects;
