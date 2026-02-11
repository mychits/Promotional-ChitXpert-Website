import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./datapage/Frontpage";
import Home from "./datapage/Home";
import Login from "./datapage/Login";
import Register from "./datapage/Register";
import FeatureDetails from "./datapage/FeatureDetails";
import SignUp from "./datapage/SignUp";
import MobileDetails from "./datapage/MobileDetails";
import Reportspage from "./datapage/Reportspage";
import Security from "./datapage/Security";
import FAQ from "./components/FAQ"
import Help from "./datapage/help&support"
import Privacy from "./datapage/privacy";
import TermsConditions from "./datapage/Term&Conditions";
import Contact from "./datapage/contact";
import AboutUs from "./datapage/Aboutus";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage/>} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/home" element={<Home />} />
         <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/signup" element={<SignUp />} /> 
         <Route path="/features" element={<FeatureDetails />} />
          <Route path="/mobile" element={<MobileDetails />} />
           <Route path="/report" element={<Reportspage />} />
           <Route path="/security" element={<Security />} />
           <Route path="/faq" element={<FAQ/>} />
           <Route path="/Help&support" element={<Help/>} />
           <Route path="/privacy" element={<Privacy/>} />
            <Route path="/termcondition" element={<TermsConditions/>} />
                             
            <Route path="/contact" element={<Contact/>} />
           


          
        
        

      
      </Routes>
    </BrowserRouter>
  );
}
