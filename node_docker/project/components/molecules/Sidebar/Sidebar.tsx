import React from "react";
import NavLinks from "@/components/atoms/navLinks/NavLinks";
import TextLink from "@/data/textLinks/Links";
import { cookies } from "next/headers";
import { verifyJwtToken } from "@/lib/generate_JWT/generator";

function Sidebar() {
  const getCookie = cookies().get("session");
  const value = verifyJwtToken(getCookie?.value);
  const name = value.name.replace(/\s/g, "");
  return (
    <div className=" h-full bg-indigo-400 flex flex-col items-center p-4">
      {TextLink.map((links) => (
        <>
          <NavLinks
            text={links.text}
            link={links.name.toLowerCase()}
            icons={links.icons}
            name={name}
          />
        </>
      ))}
    </div>
  );
}

export default Sidebar;
