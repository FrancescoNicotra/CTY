import IndexLogo from "@/components/molecules/IndexLogo/IndexLogo";
import SignUpForm from "@/components/molecules/signUpForm/SignUpForm";

function IndexPage() {
  return (
    <>
      <div className="flex flex-row">
        <IndexLogo />
        <SignUpForm />
      </div>
    </>
  );
}

export default IndexPage;
