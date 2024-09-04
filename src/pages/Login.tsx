import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ApiError, LoginUser, UserRes } from "../types/user";
import { loginUserHanlder } from "../helpers/userApi.helper";
import { AxiosResponse } from "axios";
import {useNavigate} from 'react-router-dom'
import { ErrorPopUP,SuccessPopUp } from "../util/resPopUp";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginUser>({
    userInput: "",
    password: "",
  });
  const { mutate } = useMutation<AxiosResponse<UserRes>,ApiError,LoginUser>({
    mutationFn: loginUserHanlder,
    onSuccess: () => {
      SuccessPopUp("User log-in successfully 🥳🎉")
      return navigate('/');
    },
    onError: (err) => {
      if(err.status == 404) ErrorPopUP("User does not found !! 😶")
      console.error("User login ERROR: ", err);
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
    mutate(formData);
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
            Don&apos;t have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
