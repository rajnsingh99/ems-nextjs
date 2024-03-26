import { cookies } from "next/headers";

export async function getSession() {
  return cookies().get("session")?.value;
}

export async function saveSession(empData) {
  console.log("saveSession " + empData);
  cookies().set("session", empData, { httpOnly: true });
  console.log("saveSession saved for empId: " + empData.empId);
}

export async function clearSession() {
  cookies().set("session", "", { expires: new Date(0) });
}
