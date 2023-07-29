"use client";
import IndexLogo from "@/app/components/molecules/IndexLogo/IndexLogo";
import SignUpForm from "@/app/components/molecules/signUpForm/SignUpForm";
import Cookie from "@/app/components/molecules/cookie/Cookie";

function IndexPage() {
  return (
    <>
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col">
        <IndexLogo />
        <SignUpForm />
      </div>
      <Cookie />
    </>
  );
}

export default IndexPage;
