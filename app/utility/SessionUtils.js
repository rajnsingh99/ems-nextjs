import { cookies } from "next/headers";

export async function getSession() {
  return cookies().get("session");
}

export async function saveSession(empData) {
  cookies().set("session", empData.empId, { httpOnly: true });
  console.log("saveSession saved for empId: " + getSession("session"));
}

export async function clearSession() {
  cookies().delete("session");
}
