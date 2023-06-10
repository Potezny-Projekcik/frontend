import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "@mui/icons-material/Login";
import LanguageIcon from "@mui/icons-material/Language";
import LanguageListItem from "../LanguageSwitcher/LanguageListItem";
import { useTranslation } from "react-i18next";

const NavBar = () => {
	const { t } = useTranslation("navbar");
	const token = sessionStorage.getItem("accessToken");

	return (
		<Navbar
			className="navbar fixed-top"
			data-bs-theme="dark"
			expand="lg"
			style={{color: "black"}}
		>
			<Navbar.Toggle aria-controls="navbarSupportedContent" />
			<Navbar.Collapse id="navbarSupportedContent">
				<Nav className="me-auto">
					<Nav.Link href="/movies">{t("movies")}</Nav.Link>
					<Nav.Link href="/categories">{t("categories")}</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown
						title={
							<span>
								<LanguageIcon /> {t("language")}
							</span>
						}
					>
						<NavDropdown.Item>
							<LanguageListItem langCode="en" />
						</NavDropdown.Item>
						<NavDropdown.Item>
							<LanguageListItem langCode="pl" />
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href={token ? "/logout":"/login"}>
						<LoginIcon /> {token ? t("logout"):t("login")}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
