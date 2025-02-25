"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-20 h-10 bg-customBorder rounded-xl p-1 cursor-pointer"
    >
      <span
        className={`absolute left-0 transition-transform transform ${
          language === "en" ? "translate-x-0" : "translate-x-10"
        } inline-block w-10 h-10 bg-boxColor rounded-xl`}
      />
      <span className="absolute left-3 text-sm font-bold text-foreground">
        en
      </span>
      <span className="absolute right-3 text-sm font-bold text-foreground">
        pt
      </span>
    </button>
  );
}
