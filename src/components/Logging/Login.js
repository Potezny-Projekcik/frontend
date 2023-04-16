import React from "react";
import { useTranslation } from "react-i18next";
import { useRef, useState, UseEffect } from "react";
import AuthPanel from "./AuthPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPswd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: obsługa wysłania danych logowania
    // Call login API with username and password
    console.log("Logging in with", email, pswd);

    // Make axios POST request to write data to JSON file
    // axios
    //   .post("/api/users", { email, pswd })
    //   .then((response) => {
    //     console.log("Data written to file:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error writing data to file:", error);
    //   });
  };

  const { t } = useTranslation("login");
  return (
    <AuthPanel
      title={`${t("title")}`}
      name={`${t("name")}`}
      handleSubmit={handleSubmit}
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
      <Button component={Link} to="/Register" fullWidth sx={{ mt: 3, mb: 2 }}>
        {`${t("switch")}`}
      </Button>
    </AuthPanel>
  );
};

export default Login;
