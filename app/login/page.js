"use client";

import Image from "next/image.js";
import { useFormState } from "react-dom";
import { submitCredentialsAction } from "./../components/Actions.js";
import { LOGIN_PAGE_DESC } from "../utility/AppConstants.js";
import Link from "next/link.js";

export default function Login() {
  const [loginStatus, authAction] = useFormState(submitCredentialsAction, {
    status: "",
  });
  return (
    <>
      <div className="login-form-container">
        <div className="login-form-ems-logo-container">
          <Image
            src="/ems_logo.png"
            width={185}
            height={185}
            alt="Employee image"
            className="login-form-ems-logo"
          />
        </div>
        <h1>Login</h1>
        <h3>{LOGIN_PAGE_DESC}</h3>
        <form className="login-form" action={authAction}>
          {loginStatus.status === undefined ? <p>failed</p> : null}
          <input
            name="mailEmployeeId"
            type="email"
            placeholder="Email / Employee ID"
          />
          <input name="password" type="password" placeholder="Password" />
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
