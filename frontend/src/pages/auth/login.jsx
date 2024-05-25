import React, { useRef } from "react";
import styles from "../auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
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
