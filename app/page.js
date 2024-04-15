import { redirect } from "next/navigation.js";
import { getSession } from "./utility/SessionUtils.js";
import { isObjectEmpty } from "./utility/Tools.js";

export default async function Home() {
  const session = await getSession();
  console.log("Home Page: Session - Home");
  if (isObjectEmpty(session)) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
}
