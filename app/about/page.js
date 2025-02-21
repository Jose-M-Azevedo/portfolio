import Link from "next/link";
import IconLink from "../../components/IconLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="container max-w-[90%]">
      <h1 className="font-bold text-4xl mb-10">About</h1>
      <p className="font-semibold text-lg mb-5">
        <span className="font-bold text-secondaryColor">José Azevedo</span>,
        2002.
      </p>
      <p className="font-medium text-lg mb-5">
        I’m a self-taught front-end developer from Portugal with a passion for
        creating beautiful and functional web experiences. My coding journey
        began back in high school, but it wasn’t until recently that I
        discovered my true passion for front-end development.
      </p>
      <p className="font-medium text-lg mb-5">
        Since then, I’ve been dedicated to learning and mastering the skills
        needed to turn designs into interactive, user-friendly websites and
        applications.
      </p>

      <p className="font-medium text-lg mb-10">
        I’m currently looking for new opportunities to work on exciting projects
        and collaborate with other developers. If you have a project you’d like
        to discuss, feel free to get in{" "}
        <span className="font-bold text-secondaryColor">touch!</span>
      </p>

      <h2 className="font-bold text-3xl mb-8">Contact Me</h2>
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
