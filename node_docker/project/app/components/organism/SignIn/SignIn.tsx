import IndexLogo from "@/app/components/molecules/IndexLogo/IndexLogo";
import SignInForm from "../../molecules/signInForm/SignInForm";
import Cookie from "@/app/components/molecules/cookie/Cookie";
import { cookies } from "next/headers";

function SignIn() {
  function getCookie(name: string) {
    const cookie = cookies().get(name);
    return cookie;
  }
  const session = getCookie("session");

  return (
    <>
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col">
        <IndexLogo />
        <SignInForm />
      </div>
      {!session && <Cookie />}
    </>
  );
}

export default SignIn;
