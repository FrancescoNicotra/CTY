import IndexLogo from "@/components/molecules/IndexLogo/IndexLogo";
import SignInForm from "../../molecules/signInForm/SignInForm";
import SignUpForm from "@/components/molecules/signUpForm/SignUpForm";
import Cookie from "@/components/molecules/cookie/Cookie";
import { cookies } from "next/headers";

function SignIn() {
  function getCookie(name: string) {
    const cookieStore = cookies();
    const theme = cookieStore.get(name);
    return theme;
  }
  const session = getCookie("theme");
  // console.log(session?.value);

  return (
    <>
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col">
        {!session ? (
          <>
            <IndexLogo />
            <SignUpForm />
          </>
        ) : (
          <>
            <IndexLogo />
            <SignInForm />
          </>
        )}
      </div>
      {!session && <Cookie />}
    </>
  );
}

export default SignIn;
