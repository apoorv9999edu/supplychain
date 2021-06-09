import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import {useLocation} from "react-router-dom";
import  { useState, useEffect } from 'react';
const Navbar = () => {

  const location = window.location.pathname;
  console.log(location);

    return (
   
  <>
      <Nav >
        <NavLink to="/">
          <h1 style={{ color: "#E5E7E6" }}>HVMC-Vaccine</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
         
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/Sign-Up-Forms" activeStyle />

          {/* Change from NavbarOne */}
          <NavBtnLink to="/login">Log In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
