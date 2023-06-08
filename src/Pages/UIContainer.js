import React from "react";
import NavBar from "../components/Navbar/Navbar";
import { PageContent } from "./styles";

const UIContainer = ({ children }) => {
	return (
		<>
			<NavBar />
			<PageContent>{children}</PageContent>
		</>
	);
};

export default UIContainer;
