import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LogoutPage = () => {
    const navigate = useNavigate();
    useEffect(()=>{sessionStorage.removeItem("accessToken"); navigate("/login")},[])
	return <></>;
};

export default LogoutPage;