import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import AuthPanel from "./AuthPanel";
import TextField from "@mui/material/TextField";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(dayjs());
  const [pswd, setPswd] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event);
    setDate(event);
  };

  const handlePasswordChange = (event) => {
    setPswd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { t } = useTranslation("register");
  return (
    <AuthPanel
      title={`${t("title")}`}
      name={`${t("name")}`}
      handleSubmit={handleSubmit}
      switchMsg={`${t("switch")}`}
      moveTo={"/login"}
    >
      <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={12} sm={6} rowSpacing={1}>
          <TextField
            onChange={handleFirstNameChange}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label={`${t("fName")}`}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6} rowSpacing={1}>
          <TextField
            onChange={handleLastNameChange}
            required
            fullWidth
            id="lastName"
            label={`${t("lName")}`}
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} rowSpacing={1}>
          <TextField
            onChange={handleEmailChange}
            required
            fullWidth
            id="email"
            label={`${t("email")}`}
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} rowSpacing={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem>
                <DatePicker
                  onChange={handleDateChange}
                  label={`${t("date")}`}
                  id="date"
                  slotProps={{
                    textField: {
                      helperText: "MM/DD/YYYY",
                    },
                  }}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handlePasswordChange}
            required
            fullWidth
            name="password"
            label={`${t("passwd")}`}
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
    </AuthPanel>
  );
};

export default Register;
