"use client";

import Link from "next/link";
import IconLink from "../../components/IconLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = {
  en: {
    about: "About",
    name: "José Azevedo",
    intro: `I’m a self-taught front-end developer from Portugal with a passion for
    creating appealing and functional web experiences. My coding journey
    began back in high school, but it wasn’t until recently that I
    discovered my true passion for front-end development.`,
    dedication: `Since then, I’ve been dedicated to learning and mastering the skills
    needed to turn designs into interactive, user-friendly websites and
    applications.`,
    opportunities: `I’m currently looking for new opportunities to work on exciting projects
    and collaborate with other developers. If you are interested, feel free to get in touch.`,
    contact: "Contact Me",
  },
  pt: {
    about: "Sobre",
    name: "José Azevedo",
    intro: `Sou um desenvolvedor front-end self-taught de Portugal com uma paixão por
    criar experiências web apelativas e funcionais. A minha jornada de codificação começou no ensino médio, 
    mas só recentemente descobri a minha verdadeira paixão pelo desenvolvimento front-end.`,
    dedication: `Desde então, tenho me dedicado a aprender e dominar as habilidades
    necessárias para transformar designs em sites e aplicações interativas e fáceis de usar.`,
    opportunities: `Atualmente, estou à procura de novas oportunidades para trabalhar em projetos excitantes
    e colaborar com outros desenvolvedores. Se estiver interessado, sinta-se à vontade para entrar em contato.`,
    contact: "Contacte-me",
  },
};

export default function About() {
  const { language } = useLanguage();
  const langContent = content[language];

  return (
    <div className="container max-w-[90%]">
      <h1 className="font-bold text-4xl mb-10">{langContent.about}</h1>
      <p className="font-semibold text-lg mb-5">
        <span className="font-bold text-secondaryColor">
          {langContent.name}
        </span>
        , 2002.
      </p>
      <p className="font-medium text-lg mb-5">{langContent.intro}</p>
      <p className="font-medium text-lg mb-5">{langContent.dedication}</p>
      <p className="font-medium text-lg mb-10">{langContent.opportunities}</p>
      <h2 className="font-bold text-3xl mb-8">{langContent.contact}</h2>
      <div className="flex">
        <IconLink
          href="https://github.com/Jose-M-Azevedo"
          className="hover:bg-[#141517] hover:text-white hover:rounded py-3 px-3"
        >
          <FontAwesomeIcon icon={faGithub} className="text-5xl" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/josé-azevedo-463892172/"
          className="hover:bg-[#141517] hover:text-white hover:rounded py-3 px-3"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
        </IconLink>
        <IconLink
          href="mailto:jmariaqta@gmail.com"
          className="hover:bg-[#141517] hover:text-white hover:rounded py-3 px-3"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
        </IconLink>
      </div>
    </div>
  );
}
