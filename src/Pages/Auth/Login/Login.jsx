import React, { useState } from "react";
import { LoginStyle } from "./style";
import { loginData } from "../../../Api/AllApi";
import {
  MuiBox,
  MuiButton,
  MuiLink,
  MuiTypography,
} from "../../../Components/MUI/MuiIndex";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { authLogin } from "../../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastService } from "../../../Helper/Alert";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleError = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let hasError = false;
    let tempError = {
      emailError: "",
      passwordError: "",
    };

    if (!formData.email) {
      hasError = true;
      tempError.emailError = "Email field is required";
    } else if (!emailRegex.test(formData.email)) {
      hasError = true;
      tempError.emailError = "Invalid email";
    }
    if (!formData.password) {
      hasError = true;
      tempError.passwordError = "Password field is required";
    }
    setError(tempError);
    return hasError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [`${name}Error`]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasError = handleError();
    if (!hasError) {
      const res = await loginData(formData);
      console.log(res);
      if (res.data && res.data.status === 200) {
        console.log(res.data);
        dispatch(authLogin(res.data))
        ToastService.success(res.data.message)
      } else {
        console.log("error");
      }
    }
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <LoginStyle>
      <MuiBox className="auth-head d-flex aic fdc">
        <MuiTypography component="h1">Welcome Back!</MuiTypography>
        <MuiTypography>Please login</MuiTypography>
      </MuiBox>
      <form onSubmit={handleSubmit}>
        <MuiBox className="mb-d">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!error.emailError}
            helperText={error.emailError}
          />
        </MuiBox>
        <MuiBox className="mb-d">
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!error.passwordError}
            helperText={error.passwordError}
          />
        </MuiBox>
        <MuiBox className="mb-d">
          <MuiButton fullWidth type="submit">Login</MuiButton>
        </MuiBox>
        <MuiBox className="mb-d d-flex jcfe">
          <MuiTypography sx={{ fontSize: "1.6rem" }}>
            Don't have an account? <MuiLink to="/register">Sign up</MuiLink>
          </MuiTypography>
        </MuiBox>
      </form>
    </LoginStyle>
  );
}

export default Login;
