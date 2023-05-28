import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const UIContainer = ({ children }) => {
	return <>
	<LanguageSwitcher />
	{children}</>;
};

export default UIContainer;
