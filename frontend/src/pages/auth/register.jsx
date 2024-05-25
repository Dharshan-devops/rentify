import React, { useRef } from "react";
import styles from "../auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.companyName}>rentify</div>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Enter your first name"
              id="firstName"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              id="lastName"
            />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              id="mobile"
            />
            <input type="email" placeholder="Enter your email" id="email" />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
            />
            <input
              type="password"
              placeholder="confirm the password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <button type="submit">register</button>
          </form>
          <div className={styles.redirectContainer}>
            Already have an account?
            <Link to="/login">login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
