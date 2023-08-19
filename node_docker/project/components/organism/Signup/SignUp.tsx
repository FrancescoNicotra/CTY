import IndexLogo from "@/components/molecules/IndexLogo/IndexLogo";
import SignUpForm from "@/components/molecules/signUpForm/SignUpForm";
import Cookie from "@/components/molecules/cookie/Cookie";
import { cookies } from "next/headers";

function SignUp() {
  function getCookie(name: string) {
    const cookie = cookies().get(name);
    return cookie;
  }
  const session = getCookie("theme");
  // console.log(session?.value);
  return (
    <>
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col">
        <IndexLogo />
        <SignUpForm />
      </div>
      {!session && <Cookie />}
    </>
  );
}

export default SignUp;
