"use server";
import { redirect } from "next/navigation";
import { saveSession } from "../utility/SessionUtils.js";
import { resolve } from "styled-jsx/css";

async function submitCredentialsAction(prevState, queryData) {
  const query = `http://localhost:9999/validate?email=${queryData.get(
    "mailEmployeeId"
  )}&empId=${queryData.get("mailEmployeeId")}&password=${queryData.get(
    "password"
  )}`;

  const res = await fetch(query);
  console.log("submitCredentialsAction " + res.status);
  if (!res.ok) {
    return { status: "Invalid Credentials !!" };
  } else {
    console.log(`Login Success with response:\n${res}`);
    await saveSession(res);
    redirect("/dashboard");
  }
}

async function getAllEmployee() {
  const query = "http://localhost:9999/employees";
  const response = await fetch(query);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (response.ok) {
    return response.json();
  } else {
    return undefined;
  }
}

async function getEmployee(empId) {
  const query = `http://localhost:9999/employee?empId=${empId}`;
  const response = await fetch(query);
  if (response.ok) {
    return response.json();
  } else {
    return undefined;
  }
}

export { submitCredentialsAction, getEmployee, getAllEmployee };
