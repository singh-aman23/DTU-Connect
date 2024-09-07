import UserAuthForm from "@/components/auth-form";
export default function UserHomePage({ searchParams }){
    const formMode = searchParams.mode || "login";

    return (
        <>
          <UserAuthForm mode={formMode} />;
        </>
      );
}