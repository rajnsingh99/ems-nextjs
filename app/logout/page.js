import { redirect } from "next/navigation";
import { logoutAction } from "../components/Actions.js";
import { cookies } from "next/headers.js";

export default async function Logout() {
  //   await logoutAction();
  redirect("/");
}
