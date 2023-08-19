"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavLinks({
  text,
  link,
  icons,
  name,
}: {
  text: string;
  link: string;
  icons: any;
  name: string;
}) {
  const router = usePathname();
  const isActive = router === link + "/" + name;

  return (
    <>
      {isActive ? (
        <Link
          href={link + "/" + name}
          className=" text-white my-4 flex flex-row items-center hover:underline hover:underline-offset-8 text-xl"
        >
          <div className="mx-2">{icons}</div>
          <div>{text}</div>
        </Link>
      ) : (
        <Link
          href={link + "/" + name}
          className=" text-gray-700 my-4 flex flex-row items-center hover:underline hover:underline-offset-8 text-xl"
        >
          <div className="mx-2">{icons}</div>
          <div>{text}</div>
        </Link>
      )}
    </>
  );
}

export default NavLinks;
