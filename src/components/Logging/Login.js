import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AuthPanel from "./AuthPanel";
import TextField from "@mui/material/TextField";

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
