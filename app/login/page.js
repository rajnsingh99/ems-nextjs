"use client";

import Image from "next/image.js";
import { useFormState } from "react-dom";
import { submitCredentialsAction } from "./../components/Actions.js";
import { LOGIN_PAGE_DESC } from "../utility/AppConstants.js";
import Link from "next/link.js";
import { redirect } from "next/navigation.js";

export default function Login() {
  const [loginStatus, authAction] = useFormState(submitCredentialsAction, {
    status: undefined,
    authenticated: false,
  });

  if (loginStatus.authenticated) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="login-form-container">
        <div className="login-form-ems-logo-container">
          <Image
            src="/ems_logo.png"
            width={165}
            height={165}
            alt="Employee image"
            className="login-form-ems-logo"
          />
        </div>
        <h1>Login</h1>
        <h3>{LOGIN_PAGE_DESC}</h3>
        <form className="login-form" action={authAction}>
          <input
            name="mailEmployeeId"
            type="email"
            placeholder="Email / Employee ID"
          />
          <input name="password" type="password" placeholder="Password" />
          {loginStatus.status !== undefined ? (
            <label className="login-form-failure-msg">
              {loginStatus.status}
            </label>
          ) : null}
          <button type="submit">Login</button>
        </form>
        <p>
          New Employeee?{" "}
          <Link className="login-form-get-onboarded" href="/onboard">
            Get Onboard
          </Link>
        </p>
      </div>
    </>
  );
}
