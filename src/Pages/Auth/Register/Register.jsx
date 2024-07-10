import React, { useState } from "react";
import { RegistrationStyle } from "./style";
import { registerData } from "../../../Api/AllApi";
import { ToastService } from "../../../Helper/Alert";

import {
  MuiBox,
  MuiButton,
  MuiLink,
  MuiTypography,
} from "../../../Components/MUI/MuiIndex";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: null,
  });
  const [error, setError] = useState({
    first_nameError: "",
    last_nameError: "",
    emailError: "",
    passwordError: "",
  });

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

  const handleError = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let hasError = false;
    let tempError = {
      first_nameError: "",
      last_nameError: "",
      emailError: "",
      passwordError: "",
    };

    if (!formData.first_name) {
      hasError = true;
      tempError.first_nameError = "First name field is required";
    }
    if (!formData.last_name) {
      hasError = true;
      tempError.last_nameError = "Last name field is required";
    }
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

  const handleFileChange = (e) => {
    setFormData({ ...formData, profile_pic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasError = handleError();
    if (!hasError) {
      const formDataToServer = new FormData();
      formDataToServer.append("first_name", formData.first_name);
      formDataToServer.append("last_name", formData.last_name);
      formDataToServer.append("email", formData.email);
      formDataToServer.append("password", formData.password);
      formDataToServer.append("profile_pic", formData.profile_pic);
      const res = await registerData(formDataToServer);
      console.log(res);
      if (res.data && res.data.status === 200) {
        console.log(res.data);
        navigate('/login')
        ToastService.success(res.data.message)
      } else {
        console.log("error");
      }
      setFormData((prv)=>(
        {
          ...prv,
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          profile_pic: null,
        }
      ));
    }
    
  };
console.log(formData)
  return (
    <form onSubmit={handleSubmit}>
      <RegistrationStyle>
        <MuiBox className="auth-head d-flex aic fdc">
          <MuiTypography component="h1">Registration form</MuiTypography>
          <MuiTypography>Please fill the registration form.</MuiTypography>
        </MuiBox>
        <MuiBox className="mb-d">
          <TextField
            fullWidth
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            error={!!error.first_nameError}
            helperText={error.first_nameError}
          />
        </MuiBox>
        <MuiBox className="mb-d">
          <TextField
            fullWidth
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            error={!!error.last_nameError}
            helperText={error.last_nameError}
          />
        </MuiBox>
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
            value={formData.password}
            onChange={handleChange}
            error={!!error.passwordError}
            helperText={error.passwordError}
          />
        </MuiBox>
        <MuiBox className="mb-d">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </MuiBox>
        <MuiBox className="mb-d">
          <MuiButton fullWidth type="submit">
            Sign Up
          </MuiButton>
        </MuiBox>
        <MuiBox className="mb-d d-flex jcfe">
          <MuiTypography sx={{ fontSize: "1.6rem" }}>
            Already have an account? <MuiLink to="/login">Login</MuiLink>
          </MuiTypography>
        </MuiBox>
      </RegistrationStyle>
    </form>
  );
}

export default Register;
