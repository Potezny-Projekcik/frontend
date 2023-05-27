import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginIcon from '@mui/icons-material/Login';
import LanguageIcon from '@mui/icons-material/Language';
import LanguageListItem from '../LanguageSwitcher/LanguageListItem';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation("navbar");
  return (
    <Navbar className="navbar bg-white fixed-top" data-bs-theme="dark" expand="lg">
      <Navbar.Brand href="#">Potezny-Projekcik</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#">{t("home")}</Nav.Link>
          <Nav.Link href="/movies">{t("movies")}</Nav.Link>
          <NavDropdown title={t("categories")} id="navbarDropdown">
          <NavDropdown.Item href="/categorymovies">{t("all movie categories")}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/categorymovies">Do piwka</NavDropdown.Item>
            <NavDropdown.Item href="/categorymovies">Grube rozkminy</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <NavDropdown  title ={<span><LanguageIcon/> {t("language")}</span>}>
        <NavDropdown.Item><LanguageListItem langCode="en"/></NavDropdown.Item>
        <NavDropdown.Item><LanguageListItem langCode="pl"/></NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href='/login'><LoginIcon/> {t("login")}</Nav.Link>
          
            
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
