import React, { useRef } from "react";
import styles from "../auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

function Login() {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formRef.current.email.value,
        password: formRef.current.password.value,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      Cookies.set("token", data.AuthToken);
      navigate("/", { relative: "path" });
    }
  };

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.companyName}>rentify</div>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
            />
            <button type="submit">login</button>
          </form>
          <div className={styles.redirectContainer}>
            Don't have an account?
            <Link to="/register">register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
