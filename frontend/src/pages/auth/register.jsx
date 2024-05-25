import React, { useRef } from "react";
import styles from "../auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const formRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formRef.current.firstName.value,
          lastName: formRef.current.lastName.value,
          email: formRef.current.email.value,
          phoneNumber: formRef.current.phoneNumber.value,
          password: formRef.current.password.value,
        }),
      }
    );

    if (res.ok) {
      navigate("/login", { relative: "path" });
    }
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
              required
            />
            <input
              type="text"
              placeholder="Enter your last name"
              id="lastName"
              required
            />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              id="phoneNumber"
              required
            />
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

export default Register;
