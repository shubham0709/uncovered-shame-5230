import React from "react";
import { Routes, Route } from "react-router-dom";
import Singapore from "../pages/Singapore";
import Dubai from "../pages/Dubai";

// import Homepage from "../pages/Homepage";
import { LandingPage } from "../pages/LandingPage";
import { Packages } from "./Packages/Packages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/collections/dubai" element={<Dubai />} />
      <Route path="/collections/singapore" element={<Singapore />} />
      <Route path="/collections/packages" element={<Packages/>} />

    </Routes>
  );
};

export default MainRoutes;
