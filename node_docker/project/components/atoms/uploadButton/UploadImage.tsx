"use client";
import React from "react";
import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";

import { UploadButton } from "@/utils/uploadthing/upload";

export default function Upload({ email }: { email: string }) {
  const router = useRouter();
  async function sendData(url: string) {
    const result = await POST(url, email);
    if (result.startsWith("http")) {
      router.push(result);
    } else {
      alert(result);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          sendData(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}

async function POST(profilelUrl: string, email: string) {
  const url = "/api/saveUrl";
  const data = { profilelUrl: profilelUrl, email: email };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  console.log(response);
  if (response.ok) {
    return response.url;
  } else {
    return response.statusText;
  }
}
