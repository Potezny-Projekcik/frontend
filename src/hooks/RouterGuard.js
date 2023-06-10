import React from "react"
import { Navigate } from "react-router-dom";

const RouterGuard = ({children}) => {
    const token = sessionStorage.getItem("accessToken");
    if (!token){
        return <Navigate to="/login"/>
    }
    return children;
}

export default RouterGuard;