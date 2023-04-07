import React from "react";
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import AuthPanel from "./AuthPanel";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Register = () => {


    const { t } = useTranslation("register");
    return (
        <AuthPanel title={`${t("title")}`} name={`${t("name")}`}>
            <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={12} sm={6} rowSpacing={1}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label={`${t("fName")}`}
                        autoFocus />
                </Grid><Grid item xs={12} sm={6} rowSpacing={1}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label={`${t("lName")}`}
                        name="lastName"
                        autoComplete="family-name" />
                </Grid><Grid item xs={12} rowSpacing={1}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label={`${t("email")}`}
                        name="email"
                        autoComplete="email" />
                </Grid><Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label={`${t("passwd")}`}
                        type="password"
                        id="password"
                        autoComplete="new-password" />
                </Grid>
            </Grid><Button 
                component={Link} 
                to="/Login"
                fullWidth
                sx={{ mt: 3, mb: 2 }}>
                {`${t("switch")}`}
            </Button>

        </AuthPanel>      
    )
}

export default Register