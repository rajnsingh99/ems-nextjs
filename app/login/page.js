"use client";
import LoginForm from "../components/LoginForm.js";
import useCustomRoute from "./../components/useCustomRoute.js";

export default function Login() {
  const formSubmitCallback = (formData) => {
    console.log("data " + formData.get("username"));
    useCustomRoute("/dashboard");
  };

  return (
    <>
      <div className="login-form-container">
        <h2>Login</h2>
        <LoginForm formSubmitCallback={formSubmitCallback} />
      </div>
    </>
  );
}
