import React from "react";
import NavBar from "../components/Navbar/Navbar";
import "./UIContainer-Style.css";

const UIContainer = ({ children }) => {
	return <>
	<NavBar />
	<div className="page-content">
	{children}
    </div>
	</>;
};

export default UIContainer;
