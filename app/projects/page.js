import { getProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";

async function Projects() {
  const projects = await getProjects();
  return <ProjectsGrid projects={projects} />;
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-bold text-4xl mb-10">Projects</h1>
      <Projects />
    </>
  );
}
