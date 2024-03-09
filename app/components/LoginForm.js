"use client";

export default function LoginForm({ formSubmitCallback }) {
  return (
    <form className="login-form" action={formSubmitCallback}>
      <input name="username" type="email" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
