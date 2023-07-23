import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Detail from "../pages/Detail/Detail";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
    </Routes>
  );
};

export default RoutesConfig;
