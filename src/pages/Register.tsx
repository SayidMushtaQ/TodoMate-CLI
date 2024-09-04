import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../styles/register.module.css";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerNewUserHandler } from "../helpers/userApi.helper";
import {useNavigate} from 'react-router-dom'
import type {FormData,ApiError,UserRes} from '../types/register'
import type {AxiosResponse} from 'axios'
import {toast} from 'react-toastify'
const Register: React.FC = () => {
  const nvaigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });
  const { mutate: registerNewUser,error} = useMutation<AxiosResponse<UserRes>,ApiError,FormData>({
    mutationFn: registerNewUserHandler,
    onError: (err) => {
      console.error("User register ERROR: ", err);
    },
    onSuccess:()=>{
      return nvaigate('/login')
    }
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerNewUser(formData)
  };
  const handleGoogleRegister = () => {
    // Handle Google OAuth here
    console.log("Register with Google");
    // Example: window.location.href = "YOUR_GOOGLE_AUTH_URL";
  };
  useEffect(()=>{
    if(error && error.status == 409){
      toast('User already Exist!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },[error])
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
