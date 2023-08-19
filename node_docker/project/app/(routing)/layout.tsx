import { Suspense } from "react";
import Loading from "@/components/atoms/loading/loading";
import Sidebar from "@/components/molecules/Sidebar/Sidebar";
export default function SignedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-row w-full">
        <div className=" w-1/4">
          <nav>{<Sidebar />}</nav>
        </div>
        <div className=" mx-auto p-4">{children}</div>
      </div>
    </Suspense>
  );
}
