import React from "react";
import Image from "next/image";
function IndexLogo() {
  return (
    <div className=" bg-green-100 w-1/2 h-screen p-2 flex flex-col items-center justify-center">
      <Image
        src={"/images/logo.png"}
        width={400}
        height={400}
        alt="logo"
        className="bg-transparent"
        priority={true}
      />
    </div>
  );
}

export default IndexLogo;
