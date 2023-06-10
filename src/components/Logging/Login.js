import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AuthPanel from "./AuthPanel";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPswd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("dupa");
    console.log(email);
    console.log(pswd);
    // TODO: Logging data menagement
    // Make axios POST request to write data to JSON file
    // axios
    //   .post("/api/users", { email, pswd })
    //   .then((response) => {
    //     console.log("Data written to file:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error writing data to file:", error);
    //   });
    axios
      .post(
        "http://127.0.0.1:8000/api/authentication/model-login/",
        {
          username: email,
          password: pswd
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        sessionStorage.setItem("accessToken", response.data.access);
        setIsLoggedIn(true);
        window.location.href =  "/movies";
      })
      .catch(function (error) {
      });
  };

  const { t } = useTranslation("login");
  return (
    <AuthPanel
      title={`${t("title")}`}
      name={`${t("name")}`}
      handleSubmit={handleSubmit}
      switchMsg={`${t("switch")}`}
      moveTo={"/register"}
    >
      <TextField
        onChange={handleEmailChange}
        margin="normal"
        required
        fullWidth
        id="email"
        label={`${t("email")}`}
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        onChange={handlePasswordChange}
        margin="normal"
        required
        fullWidth
        name="password"
        label={`${t("passwd")}`}
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </AuthPanel>
  );
};

export default Login;
