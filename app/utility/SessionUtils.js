import { cookies } from "next/headers";

export async function getSession() {
  const session = cookies().get("session")?.value;
  console.log("getSession " + session);
  return session;
}

export async function saveSession(data) {
  const session = {
    empId: data.empId,
    email: data.email,
    role: data.role,
  };

  const expire = new Date(Date.now() + 1 * 1000);
  cookies().set("session", session, { expire, httpOnly: true });
  console.log("saveSession " + session);
}

export async function resetSession() {
  cookies().set("session", "", { expires: new Date(0) });
}
