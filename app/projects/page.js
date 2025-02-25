import { getProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectsHeader from "@/components/ProjectsHeader";

async function Projects() {
  const projects = await getProjects();
  return <ProjectsGrid projects={projects} />;
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <Projects />
    </>
  );
}
