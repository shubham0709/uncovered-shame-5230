import React from "react";
import { Routes, Route } from "react-router-dom";
// import Homepage from "../pages/Homepage";
import { LandingPage } from "../pages/LandingPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default MainRoutes;
