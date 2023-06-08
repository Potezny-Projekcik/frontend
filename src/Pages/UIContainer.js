import React, { createContext, useState, useMemo } from "react";
import NavBar from "../components/Navbar/Navbar";
import { PageContent } from "./styles";

const UserContext = createContext();
const UIContainer = ({ children }) => {
	const [user, setUser] = useState({});

	const userContextValue = useMemo(() => ({ user, setUser }), [user]);

	return (
		<UserContext.Provider value={userContextValue}>
			<NavBar />
			<PageContent>{children}</PageContent>
		</UserContext.Provider>
	);
};

export default UIContainer;
