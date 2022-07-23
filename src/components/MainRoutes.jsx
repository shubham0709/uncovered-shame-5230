import React from "react";
import { Routes, Route } from "react-router-dom";
import Singapore from "../pages/Singapore";
import Dubai from "../pages/Dubai";

import { LandingPage } from "../pages/LandingPage";
import { Booking } from "./Packages/Booking";
import Packages from "../pages/Packages";
import ProceedToPaymentPage from "../pages/ProceedToPaymentPage";
import LoginModal from "./LoginSignup/Login";
import SignupModal from "./LoginSignup/Signup";
import ErrorPage from "../pages/ErrorPage";
import Beach from "./BeachComponent/Beach";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/collections/dubai" element={<Dubai />} />
      <Route path="/collections/singapore" element={<Singapore />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/proceedToPaymentPage" element={<ProceedToPaymentPage />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/signup" element={<SignupModal />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/beach" element={<Beach />} />

    </Routes>
  );
};

export default MainRoutes;
