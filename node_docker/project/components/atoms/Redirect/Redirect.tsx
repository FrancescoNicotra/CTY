"use client";
import { redirect } from "next/navigation";
import React from "react";

function Redirect({ to }: { to: string }) {
  return <>{redirect(to)}</>;
}

export default Redirect;
