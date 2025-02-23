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
    demoLink: "https://jose-azevedo-portfolio.netlify.app/",
  },
  {
    title: "Warrior Fitness",
    description: "A dummy gym frontpage.",
    techStack: JSON.stringify([
      "Javascript",
      "HTML5",
      "CSS3",
      "Google Maps API",
    ]),
    githubLink: "https://github.com/Jose-M-Azevedo/warrior-fitness",
    demoLink: "https://warrior-fitness.netlify.app/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A tic-tac-toe game project.",
    techStack: JSON.stringify(["Reactjs"]),
    githubLink: "https://github.com/Jose-M-Azevedo/react-tic-tac-toe",
    demoLink: "https://tic-tac-toe-jose-azevedo.netlify.app/",
  },
  {
    title: "Timers",
    description: "A simple app to guess timers.",
    techStack: JSON.stringify(["Reactjs"]),
    githubLink: "https://github.com/Jose-M-Azevedo/timers-app",
    demoLink: "https://timers-react-jose-azevedo.netlify.app/",
  },
  {
    title: "Forkify",
    description:
      "A learning project from Jonas Schmedtmann's course. Search and create recipes.",
    techStack: JSON.stringify(["Javascript", "Html5", "CSS3", "MVC"]),
    githubLink: "https://github.com/Jose-M-Azevedo/forkify-learning-js",
    demoLink:
      "https://forkify-jose-azevedo.netlify.app/#664c8f193e7aa067e94e8844",
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
