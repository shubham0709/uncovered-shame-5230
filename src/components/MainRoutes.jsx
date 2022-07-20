import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Homepage from "../pages/Homepage";
import Singapore from "../pages/Singapore";
=======
// import Homepage from "../pages/Homepage";
import { LandingPage } from "../pages/LandingPage";
>>>>>>> 59396c9a2a2432f9271713b52a9f5b72724500ea

const MainRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Homepage />} />
      <Route path="/singapore" element={<Singapore />} />
=======
      <Route path="/" element={<LandingPage />} />
>>>>>>> 59396c9a2a2432f9271713b52a9f5b72724500ea
    </Routes>
  );
};

export default MainRoutes;
