import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Search from "@/components/search";

export default async function SearchPage() {
  const authResult = await verifyAuth();
  if (!authResult.user) {
    return redirect("/");
  }

  return <Search />;
}
