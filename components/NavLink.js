"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = href === "/" ? path === href : path.startsWith(href);

  return (
    <Link href={href}>
      <div
        className={`font-bold py-2 px-3 ${
          isActive
            ? "bg-boxColor text-secondaryColor rounded"
            : "hover:bg-customBorder hover:text-secondaryColor hover:rounded"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}
