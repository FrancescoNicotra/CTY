import { cookies } from "next/headers";
import Redirect from "@/components/atoms/Redirect/Redirect";
import { verifyJwtToken } from "@/lib/generate_JWT/generator";

export default function Home() {
  const cookie = cookies().get("session");

  if (!cookie) {
    return <Redirect to="/" />;
  } else {
    const payload = verifyJwtToken(cookie.value);
    if (!payload.session) return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
