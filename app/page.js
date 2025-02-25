"use client";
import ProgrammingLanguagesIcons from "@/components/ProgrammingLanguagesIcons";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const content = {
  en: {
    welcome: "Welcome to my portfolio 👋",
    introduction:
      "Hello my name is José Azevedo and I'm an aspiring fronted developer.",
    loveBuilding: "I love building many things with Javascript like ",
    this: "this.",
    getResume: "Get my resume",
    mySkills: "My Skills",
  },
  pt: {
    welcome: "Bem vindos ao meu portfolio 👋",
    introduction:
      "Olá o meu nome é José Azevedo e sou um aspirante desenvolvedor frontend.",
    loveBuilding: "Eu adoro construir várias coisas com Javascript como ",
    this: "isto.",
    getResume: "Obter o meu currículo",
    mySkills: "As minhas skills",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const langContent = content[language];

  return (
    <div className="container max-w-[70%]">
      <h1 className="font-bold text-4xl mb-8">{langContent.welcome}</h1>
      <p className="text-lg mb-1">{langContent.introduction}</p>
      <p className="text-lg mb-5">
        {langContent.loveBuilding}
        <Link
          href="/projects"
          className="font-semibold text-secondaryColor underline"
        >
          {langContent.this}
        </Link>
      </p>
      <a
        href="José_Azevedo_CV.pdf"
        download
        className="inline-block bg-secondaryColor text-black font-semibold py-2 px-4 rounded mb-10 hover:bg-boxColor hover:text-foreground hover:border-foreground hover:border"
      >
        {langContent.getResume}
      </a>
      <h2 className="font-bold text-3xl mb-8">{langContent.mySkills}</h2>
      <div className="flex space-x-2">
        <ProgrammingLanguagesIcons />
      </div>
    </div>
  );
}
