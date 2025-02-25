"use client";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsHeader() {
  const { language } = useLanguage();

  return (
    <h1 className="font-bold text-4xl mb-10">
      {language === "en" ? "Projects" : "Projetos"}
    </h1>
  );
}
