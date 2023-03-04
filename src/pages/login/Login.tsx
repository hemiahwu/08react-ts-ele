import React from "react";
import Logo from "../../assets/react.svg";
import "./login.css";

export default function Login() {
  return (
    <section className="login-component">
      <header className="logo">
        <img src={Logo} alt="my login image" />
      </header>
    </section>
  );
}
