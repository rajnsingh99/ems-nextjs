"use server";
import { redirect } from "next/navigation";

async function submitCredentialsAction(prevState, queryData) {
  const query = `http://localhost:9999/validate?email=${queryData.get(
    "mailEmployeeId"
  )}&empId=${queryData.get("mailEmployeeId")}&password=${queryData.get(
    "password"
  )}`;

  console.log("query --> " + query);
  const res = await fetch(query);
  console.log("submitCredentialsAction " + res.status);
  if (!res.ok) {
    return { status: undefined };
  } else {
    console.log(`Response data ${res}`);
    redirect("/dashboard");
  }
}

export { submitCredentialsAction };
