"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-20 h-10 bg-customBorder rounded-full p-1 cursor-pointer"
    >
      <span
        className={`absolute left-0 transition-transform transform ${
          language === "en" ? "translate-x-0" : "translate-x-10"
        } inline-block w-10 h-10 bg-boxColor rounded-full`}
      />
      <span className="absolute left-4 text-xs font-semibold text-foreground">
        en
      </span>
      <span className="absolute right-4 text-xs font-semibold text-foreground">
        pt
      </span>
    </button>
  );
}
