import IconLink from "@/components/IconLink";

export default function ProgrammingLanguagesIcons() {
  return (
    <>
      <IconLink
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        className="hover:bg-[#141517] hover:text-white hover:rounded p-3"
      >
        <img src="/html-5-svgrepo-com.svg" alt="HTML5" className="w-20 h-20" />
      </IconLink>

      <IconLink
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        className="hover:bg-[#141517] hover:text-white hover:rounded p-3"
      >
        <img src="/css-3-svgrepo-com.svg" alt="CSS3" className="w-20 h-20" />
      </IconLink>

      <IconLink
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        className="hover:bg-[#141517] hover:text-white hover:rounded p-3"
      >
        <img
          src="javascript-logo-svgrepo-com.svg"
          alt="JavaScript"
          className="w-20 h-20"
        />
      </IconLink>

      <IconLink
        href="https://reactjs.org/"
        className="hover:bg-[#141517] hover:text-white hover:rounded p-3"
      >
        <img src="/react-svgrepo-com.svg" alt="React" className="w-20 h-20" />
      </IconLink>

      <IconLink
        href="https://nextjs.org/"
        className="hover:bg-[#141517] hover:text-white hover:rounded p-3"
      >
        <img
          src="nextjs-icon-svgrepo-com.svg"
          alt="Next.js"
          className="w-20 h-20"
        />
      </IconLink>

      <IconLink
        href="https://tailwindcss.com/"
        className="hover:bg-[#141517] hover:rounded p-3"
      >
        <img
          src="tailwind-svgrepo-com.svg"
          alt="Tailwind CSS"
          className="w-20 h-20"
        />
      </IconLink>
    </>
  );
}
