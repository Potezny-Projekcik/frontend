import React from "react";
import { useTranslation } from "react-i18next";
import { useRef, useState, UseEffect } from 'react';
import AuthPanel from "./AuthPanel";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Login = () => {
    // const userRef = useRef();
    // const errRef = useRef();


    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // UseEffect (() => {
    //     userRef.current.focus();
    // }, [])

    // UseEffect (() => {
    //     setErrMsg('');
    // }, [user, pwd])

  
    const { t } = useTranslation("login");
    return (
        <AuthPanel title={`${t("title")}`} name={`${t("name")}`}>
            <TextField
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
              margin="normal"
              required
              fullWidth
              name="password"
              label={`${t("passwd")}`}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button 
                component={Link} 
                to="/Register"
                fullWidth
                sx={{ mt: 3, mb: 2 }}>
                {`${t("switch")}`}
            </Button>
        </AuthPanel>   
    )
}

export default Login