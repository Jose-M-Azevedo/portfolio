import ProgrammingLanguagesIcons from "@/components/ProgrammingLanguagesIcons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container max-w-[70%]">
      <h1 className="font-bold text-4xl mb-8">Welcome to my portfolio 👋</h1>
      <p className="text-lg mb-1">
        Hello my name is José Azevedo and I'm an aspiring fronted developer.
      </p>
      <p className="text-lg mb-5">
        I love building things with Javascript like {""}
        <Link
          href="/projects"
          className="font-semibold text-secondaryColor underline"
        >
          this.
        </Link>
      </p>
      <a
        href="José_Azevedo_-_Front_end_Developer.pdf"
        download
        className="inline-block bg-secondaryColor text-black font-semibold py-2 px-4 rounded mb-10 hover:bg-boxColor hover:text-foreground hover:border-foreground hover:border"
      >
        Get my resume
      </a>
      <h2 className="font-bold text-3xl mb-8">My Skills 💡</h2>
      <div className="flex space-x-2">
        <ProgrammingLanguagesIcons />
      </div>
    </div>
  );
}
