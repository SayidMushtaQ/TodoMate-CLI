import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/register.module.css";

interface FormData {
  username: string;
  fullname: string;
  email: string;
  password: string;
  phone: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
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
  const handleGoogleRegister = () => {
    // Handle Google OAuth here
    console.log("Register with Google");
    // Example: window.location.href = "YOUR_GOOGLE_AUTH_URL";
  };
  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Register</h2>
        <div className={styles.flexContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter a full-name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a email"
            value={formData.email}
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
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter a phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Register
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
            onClick={handleGoogleRegister}
          >
            Register with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
