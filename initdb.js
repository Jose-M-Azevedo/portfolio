const sql = require("better-sqlite3");
const db = sql("projects.db");

const projects = [
  {
    title: "Foodies App",
    description:
      "A web application that allows users to search and create recipes.",
    techStack: JSON.stringify(["Reactjs", "Nextjs", "Better-Sqlite3"]),
    githubLink: "https://github.com/Jose-M-Azevedo/Foodies-App",
    demoLink: "https://foodies-app-demo.netlify.app/",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website.",
    techStack: JSON.stringify([
      "Reactjs",
      "Nextjs",
      "Better-Sqlite3",
      "Tailwindcss",
    ]),
    githubLink: "https://github.com/Jose-M-Azevedo/portfolio",
    demoLink: "",
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  techStack TEXT NOT NULL,
  githubLink TEXT NOT NULL,
  demoLink TEXT
)`
).run();

async function initData() {
  const checkStmt = db.prepare(
    "SELECT COUNT(*) AS count FROM projects WHERE title = @title"
  );
  const insertStmt = db.prepare(`
    INSERT INTO projects (title, description, techStack, githubLink, demoLink)
    VALUES (@title, @description, @techStack, @githubLink, @demoLink)
  `);

  for (const project of projects) {
    const { count } = checkStmt.get(project);
    if (count === 0) {
      insertStmt.run(project);
    }
  }
}

initData();
