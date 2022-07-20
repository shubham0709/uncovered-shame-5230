import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Singapore from "../pages/Singapore";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/singapore" element={<Singapore />} />
    </Routes>
  );
};

export default MainRoutes;
