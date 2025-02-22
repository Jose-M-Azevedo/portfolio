import sql from "better-sqlite3";

const db = sql("projects.db");

export async function getProjects() {
  const projects = db.prepare("SELECT * FROM projects").all();
  return projects.map((project) => ({
    ...project,
    techStack: JSON.parse(project.techStack),
  }));
}
