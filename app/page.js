import { redirect } from "next/navigation.js";
import { getSession } from "./utility/SessionUtils.js";
import { isObjectEmpty } from "./utility/Tools.js";

export default async function Home() {
  const session = getSession();
  console.log("Home Page: Session - " + JSON.stringify(session));
  if (isObjectEmpty(session)) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
}
