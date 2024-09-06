import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SearchComponent from "@/components/SearchComponent";

export default async function SearchPage() {
  const authResult = await verifyAuth();
  if (!authResult.user) {
    return redirect("/");
  }

  return <SearchComponent />;
}
