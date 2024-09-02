import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    userInput: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google OAuth here
    console.log("Login with Google");
    // Example: window.location.href = "YOUR_GOOGLE_AUTH_URL";
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login</h2>

        <div className={styles.formGroup}>
          <label htmlFor="userInput">Email or Username:</label>
          <input
            type="text"
            id="userInput"
            name="userInput"
            value={formData.userInput}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Login
        </button>

        <div className={styles.separator}>
          <span className={styles.separatorLine}></span>
          <span className={styles.separatorText}>or</span>
          <span className={styles.separatorLine}></span>
        </div>

        <div className={styles.googleButtonContainer}>
          <button
            type="button"
            className={styles.googleButton}
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
        </div>
        <div className={styles.dontHaveAccount}>
          <p>
            Don&apos;t have an account? <Link to="/register" className={styles.registerLink}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
