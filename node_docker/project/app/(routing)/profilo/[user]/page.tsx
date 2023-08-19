import React from "react";
import Upload from "@/components/atoms/uploadButton/UploadImage";
import { cookies } from "next/headers";
import { verifyJwtToken } from "@/lib/generate_JWT/generator";

function Profile() {
  const cookie = cookies().get("session");
  const payload = verifyJwtToken(cookie.value);
  const email = payload.email;
  return (
    <>
      <Upload email={email} />
    </>
  );
}

export default Profile;
