import { redirect } from "next/navigation.js";
import { cookies } from "next/headers.js";
import { getSession } from "./utility/SessionUtils.js";

export default async function Home() {
  const session = cookies().get("session")?.value;
  if (session == undefined || session == "undefined" || session == null) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
}
