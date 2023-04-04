import React from "react";
import { useTranslation } from "react-i18next";
import { useRef, useState, UseEffect } from 'react';



const Login = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    UseEffect (() => {
        userRef.current.focus();
    }, [])

    UseEffect (() => {
        setErrMsg('');
    }, [user, pwd])

    return (
        <div>
            
        </div>
    )
}

export default Login