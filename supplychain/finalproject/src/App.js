import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import logedComponent from "./pages/logedComponent";
import Loggedinui from "./pages/Loggedinui";

import LogIn from "./pages/LogIn";
import SignUpManufacturer from "./pages/Sign-up-forms/Manufacturer";
import SignUpHandler from "./pages/Sign-up-forms/Handler";
import SignUpBeneficiary from "./pages/Sign-up-forms/Beneficiary";
import SignUpPhysician from "./pages/Sign-up-forms/Physician";
import SignUp from "./pages/SignUp/index";

import { BrowserRouter } from "react-router-dom";

import PhyHomePage from "./pages/logedComponent/comps/phyfolder/PhyHomePage";
import ManuHomePage from "./pages/logedComponent/comps/manufolder/ManuHomePage";
import HandHomePage from "./pages/logedComponent/comps/handfolder/HandHomePage";
import BeneHomePage from "./pages/logedComponent/comps/benefolder/BeneHomePage";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />  
      
      <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/about" component={About} />
   <Route path="/services" component={Services} />
   <Route path="/logedComponent" component={logedComponent} />
   <Route path="/sign-up" component={SignUp} />
   <Route path="/LogIn" component={LogIn} />
   <Route path="/Sign-up-forms/manufacturer"  component={SignUpManufacturer} />
   <Route path="/Sign-up-forms/handler" component={SignUpHandler} />
    <Route path="/Sign-up-forms/beneficiary" component={SignUpBeneficiary} />
    <Route path="/Sign-up-forms" component={SignUpPhysician} /> 
    <Route path="/logedComponent/comps/benefolder/BeneHomePage" component={BeneHomePage} />
    <Route path="/logedComponent/comps/manufolder/ManuHomePage" component={ManuHomePage} />
    <Route path="/logedComponent/comps/phyfolder/PhyHomePage" component={PhyHomePage} />
    <Route path="/logedComponent/comps/handfolder/HandHomePage" component={HandHomePage} />
      </Switch>
</BrowserRouter>
    </>
  );
}

