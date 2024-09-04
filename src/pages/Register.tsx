import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/register.module.css";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerNewUserHandler } from "../helpers/userApi.helper";
import { useNavigate } from "react-router-dom";
import {SuccessPopUp,ErrorPopUP} from '../util/resPopUp'
import type { RegisterUser, ApiError, RegisterRes } from "../types/user";
import type { AxiosResponse } from "axios";
const Register: React.FC = () => {
  const nvaigate = useNavigate();
  const [formData, setFormData] = useState<RegisterUser>({
    userName: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });
  const { mutate: registerNewUser } = useMutation<AxiosResponse<RegisterRes>,ApiError,RegisterUser>({
    mutationFn: registerNewUserHandler,
    onSuccess: () => {
      SuccessPopUp("User register Successfully 🥳🎉")
      return nvaigate("/login");
    },
    onError: (err) => {
      if (err.status == 409) ErrorPopUP("User already exist, Please LOGIN")
      console.error("User register ERROR: ", err);
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerNewUser(formData);
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
            <label htmlFor="userName">userName:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter a userName"
              value={formData.userName}
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
        <div className={styles.alreadyHaveAccount}>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
