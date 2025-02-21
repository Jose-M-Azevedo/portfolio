import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";

export default function MainHeader() {
  return (
    <header>
      <nav className="py-4 border-b border-customBorder">
        <div className="container mx-auto flex justify-between items-center max-w-[50%]">
          <div className="space-x text-base flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          <div className="space-x-2 flex items-center">
            <IconLink
              href="https://github.com/Jose-M-Azevedo"
              className="hover:bg-[#141517] hover:text-white hover:rounded py-3 px-5"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/josé-azevedo-463892172/"
              className="hover:bg-[#141517] hover:text-white hover:rounded py-3 px-5"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </IconLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
