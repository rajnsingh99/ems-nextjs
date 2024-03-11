"use client";
import { useFormState } from "react-dom";
import { submitCredentialsAction } from "./Actions";

export default function LoginForm() {
  const [loginStatus, authAction] = useFormState(submitCredentialsAction, {
    status: "",
  });

  return (
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
  );
}
