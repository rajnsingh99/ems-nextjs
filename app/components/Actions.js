"use server";
import { clearSession, saveSession } from "../utility/SessionUtils.js";

async function submitCredentialsAction(prevState, queryData) {
  const query = `http://localhost:9999/validate?email=${queryData.get(
    "mailEmployeeId"
  )}&empId=${queryData.get("mailEmployeeId")}&password=${queryData.get(
    "password"
  )}`;

  const res = await fetch(query);
  console.log("submitCredentialsAction " + res.status);
  if (!res.ok) {
    return { status: "Invalid Credentials !!", authenticated: false };
  } else {
    const empData = await res.json();
    console.log(`Login Success with empData: \n ${JSON.stringify(empData)}`);
    await saveSession(empData);
    return { status: "Welcome ", authenticated: true };
  }
}

async function getAllEmployee() {
  const query = "http://localhost:9999/employees";
  const response = await fetch(query);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (response.ok) {
    return response.json();
  } else {
    return undefined;
  }
}

async function getEmployee(empId) {
  const query = `http://localhost:9999/employee?empId=${empId}`;
  const response = await fetch(query);
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (response.ok) {
    return response.json();
  } else {
    return undefined;
  }
}

async function getLeaveRecords(empId) {
  const query = `http://localhost:9999/leaves?empId=${empId}`;
  const response = await fetch(query);
  if (response.ok) {
    return response.json();
  } else {
    return undefined;
  }
}

async function logoutAction() {
  await clearSession();
}

export {
  submitCredentialsAction,
  getEmployee,
  getAllEmployee,
  getLeaveRecords,
  logoutAction,
};
