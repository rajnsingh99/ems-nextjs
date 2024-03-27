import { redirect } from "next/navigation.js";
import { getSession } from "./utility/SessionUtils.js";
import { isObjectEmpty } from "./utility/Tools.js";
import { cookies } from "next/headers.js";

export default async function Home() {
  const session = await getSession();
  console.log("Home Page: Session - " + session.value);
  if (isObjectEmpty(session)) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
}
