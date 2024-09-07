import { DriverAuthForm } from "@/components/auth-form";
export default function DriverHomePage({ searchParams }){
    const formMode = searchParams.mode || "login";

    return (
        <>
          <DriverAuthForm mode={formMode} />;
        </>
      );
}