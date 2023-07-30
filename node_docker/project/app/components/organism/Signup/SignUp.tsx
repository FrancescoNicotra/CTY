import IndexLogo from "@/app/components/molecules/IndexLogo/IndexLogo";
import SignUpForm from "@/app/components/molecules/signUpForm/SignUpForm";
import Cookie from "@/app/components/molecules/cookie/Cookie";
import { cookies } from "next/headers";

function SignUp() {
  function getCookie(name: string) {
    const cookie = cookies().get(name);
    return cookie;
  }
  const session = getCookie("session");
  console.log(session);
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
